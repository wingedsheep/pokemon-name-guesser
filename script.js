const pokemonGrid = document.getElementById('pokemon-grid');
const pokemonInput = document.getElementById('pokemon-input');
const feedback = document.getElementById('feedback');
const muteButton = document.getElementById('mute-button');
const hintButton = document.getElementById('hint-button');
const resetButton = document.getElementById('reset-button');
const modal = document.getElementById('pokedex-modal');
const closeButton = document.querySelector('.close-button');

let pokemonData = [];
let isMuted = false;
let almostCorrectPokemon = null;

function normalizeName(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

async function fetchPokemonData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        const pokemonList = data.results;

        const pokemonPromises = pokemonList.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const pokemonDetails = await response.json();
            return {
                name: pokemonDetails.name,
                id: pokemonDetails.id,
                image: `https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemonDetails.id}.svg`,
                types: pokemonDetails.types.map(typeInfo => typeInfo.type.name),
                height: pokemonDetails.height,
                weight: pokemonDetails.weight,
                abilities: pokemonDetails.abilities
            };
        });

        pokemonData = await Promise.all(pokemonPromises);
        createPokemonGrid();
        loadRevealedPokemon();
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

function loadRevealedPokemon() {
    const revealedPokemonIds = JSON.parse(localStorage.getItem('revealedPokemon')) || [];
    revealedPokemonIds.forEach(id => {
        const pokemon = pokemonData.find(p => p.id === id);
        if (pokemon) {
            const tile = document.querySelector(`[data-pokemon-id='${pokemon.id}']`);
            tile.innerHTML = `<img src="${pokemon.image}" alt="${pokemon.name}">`;
            tile.classList.add('revealed');
            pokemon.types.forEach(type => tile.classList.add(type));
        }
    });
}

function createPokemonGrid() {
    for (let i = 1; i <= 151; i++) {
        const tile = document.createElement('div');
        tile.classList.add('pokemon-tile');
        tile.textContent = i;
        tile.dataset.pokemonId = i;
        pokemonGrid.appendChild(tile);
    }
}

function saveRevealedPokemon() {
    const revealedPokemonIds = [...document.querySelectorAll('.pokemon-tile.revealed')].map(tile => parseInt(tile.dataset.pokemonId));
    localStorage.setItem('revealedPokemon', JSON.stringify(revealedPokemonIds));
}

pokemonInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const guessedName = pokemonInput.value.toLowerCase();
        const normalizedGuessedName = normalizeName(guessedName);
        const pokemon = pokemonData.find(p => normalizeName(p.name) === normalizedGuessedName);

        if (pokemon) {
            almostCorrectPokemon = null;
            const tile = document.querySelector(`[data-pokemon-id='${pokemon.id}']`);
            tile.innerHTML = `<img src="${pokemon.image}" alt="${pokemon.name}">`;
            tile.classList.add('revealed');
            pokemon.types.forEach(type => tile.classList.add(type));
            feedback.textContent = 'Correct!';
            feedback.className = 'correct';
            saveRevealedPokemon();
            if (!isMuted) {
                const cryUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemon.name}.mp3`;
                const audio = new Audio(cryUrl);
                audio.play();
            }
        } else {
            if (almostCorrectPokemon) {
                feedback.textContent = `The correct spelling was ${almostCorrectPokemon.name}!`;
                feedback.className = 'incorrect';
                almostCorrectPokemon = null;
            } else {
                const revealedPokemonIds = [...document.querySelectorAll('.pokemon-tile.revealed')].map(tile => parseInt(tile.dataset.pokemonId));
                const unrevealedPokemon = pokemonData.filter(p => !revealedPokemonIds.includes(p.id));
                let foundAlmostCorrect = false;
                for (const p of unrevealedPokemon) {
                    if (levenshteinDistance(normalizedGuessedName, normalizeName(p.name)) <= 2) {
                        almostCorrectPokemon = p;
                        feedback.textContent = 'You are very close! Almost there!';
                        feedback.className = 'incorrect';
                        foundAlmostCorrect = true;
                        break;
                    }
                }
                if (!foundAlmostCorrect) {
                    feedback.textContent = 'Wrong!';
                    feedback.className = 'incorrect';
                }
            }
            pokemonInput.classList.add('shake');
            setTimeout(() => pokemonInput.classList.remove('shake'), 500);
        }

        pokemonInput.value = '';
        setTimeout(() => feedback.textContent = '', 2000);
    }
});

hintButton.addEventListener('click', () => {
    const revealedPokemonIds = [...document.querySelectorAll('.pokemon-tile.revealed')].map(tile => parseInt(tile.dataset.pokemonId));
    const unrevealedPokemon = pokemonData.filter(p => !revealedPokemonIds.includes(p.id));

    if (unrevealedPokemon.length > 0) {
        const randomPokemon = unrevealedPokemon[Math.floor(Math.random() * unrevealedPokemon.length)];
        const hint = `${randomPokemon.name.charAt(0)}...${randomPokemon.name.charAt(randomPokemon.name.length - 1)}`;
        feedback.textContent = `Hint: There is a Pokémon that starts with '${randomPokemon.name.charAt(0)}' and ends with '${randomPokemon.name.charAt(randomPokemon.name.length - 1)}'.`;
        feedback.className = '';
    } else {
        feedback.textContent = 'All Pokémon have been guessed!';
        feedback.className = '';
    }
    setTimeout(() => feedback.textContent = '', 3000);
});

resetButton.addEventListener('click', () => {
    localStorage.removeItem('revealedPokemon');
    location.reload();
});

muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    muteButton.classList.toggle('muted', isMuted);
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

pokemonGrid.addEventListener('click', async (event) => {
    const tile = event.target.closest('.pokemon-tile');
    if (tile && tile.classList.contains('revealed')) {
        const pokemonId = tile.dataset.pokemonId;
        const pokemon = pokemonData.find(p => p.id == pokemonId);

        const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
        const speciesData = await speciesResponse.json();
        const description = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text;

        document.getElementById('pokemon-name').textContent = pokemon.name;
        document.getElementById('pokemon-image').src = pokemon.image;
        document.getElementById('pokemon-height').textContent = `${pokemon.height / 10} m`;
        document.getElementById('pokemon-weight').textContent = `${pokemon.weight / 10} kg`;
        document.getElementById('pokemon-abilities').textContent = pokemon.abilities.map(a => a.ability.name).join(', ');
        document.getElementById('pokemon-description').textContent = description;

        modal.style.display = 'block';
    }
});

function levenshteinDistance(a, b) {
    const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

    for (let i = 0; i <= a.length; i++) {
        matrix[0][i] = i;
    }

    for (let j = 0; j <= b.length; j++) {
        matrix[j][0] = j;
    }

    for (let j = 1; j <= b.length; j++) {
        for (let i = 1; i <= a.length; i++) {
            const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[j][i] = Math.min(
                matrix[j][i - 1] + 1,
                matrix[j - 1][i] + 1,
                matrix[j - 1][i - 1] + indicator
            );
        }
    }

    return matrix[b.length][a.length];
}

fetchPokemonData();
