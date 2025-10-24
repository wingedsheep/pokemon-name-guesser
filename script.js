const pokemonGrid = document.getElementById('pokemon-grid');
const pokemonInput = document.getElementById('pokemon-input');
const feedback = document.getElementById('feedback');
const muteButton = document.getElementById('mute-button');
const hintButton = document.getElementById('hint-button');
const resetButton = document.getElementById('reset-button');
const scoreCounter = document.getElementById('score-counter');
const modal = document.getElementById('pokedex-modal');
const closeButton = document.querySelector('.close-button');

const typeColors = {
    normal: '#a8a878',
    fire: '#f08030',
    water: '#6890f0',
    electric: '#f8d030',
    ice: '#98d8d8',
    fighting: '#c03028',
    ground: '#e0c068',
    flying: '#a890f0',
    poison: '#a040a0',
    grass: '#78c850',
    psychic: '#f85888',
    bug: '#a8b820',
    rock: '#b8a038',
    ghost: '#705898',
    dragon: '#7038f8',
    dark: '#705848',
    steel: '#b8b8d0',
    fairy: '#ee99ac'
};

let pokemonData = [];
let isMuted = false;
let almostCorrectPokemon = null;
let score = 0;

function normalizeName(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function transformDitto() {
    const dittoTile = document.querySelector('[data-pokemon-id="132"]');
    if (dittoTile && dittoTile.classList.contains('revealed')) {
        const originalImage = dittoTile.innerHTML;
        const randomPokemon = pokemonData[Math.floor(Math.random() * pokemonData.length)];
        dittoTile.innerHTML = `<img src="${randomPokemon.image}" alt="${randomPokemon.name}">`;

        setTimeout(() => {
            dittoTile.innerHTML = originalImage;
        }, 1000);
    }
}

async function fetchPokemonData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        const pokemonList = data.results;

        const shinyPokemonIds = JSON.parse(localStorage.getItem('shinyPokemon')) || [];

        const pokemonPromises = pokemonList.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const pokemonDetails = await response.json();

            let isShiny = shinyPokemonIds.includes(pokemonDetails.id);
            if (!localStorage.getItem('shinyPokemon')) {
                isShiny = Math.random() < 1 / 150;
            }

            return {
                name: pokemonDetails.name,
                id: pokemonDetails.id,
                image: `https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemonDetails.id}.svg`,
                isShiny: isShiny,
                types: pokemonDetails.types.map(typeInfo => typeInfo.type.name),
                height: pokemonDetails.height,
                weight: pokemonDetails.weight,
                abilities: pokemonDetails.abilities
            };
        });

        window.fetchPokemonDataPromise = Promise.all(pokemonPromises);
        pokemonData = await window.fetchPokemonDataPromise;
        createPokemonGrid();
        loadGameState();
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

function loadGameState() {
    const revealedPokemonIds = JSON.parse(localStorage.getItem('revealedPokemon')) || [];
    score = revealedPokemonIds.length;
    scoreCounter.textContent = `Score: ${score} / 151`;

    revealedPokemonIds.forEach(id => {
        const pokemon = pokemonData.find(p => p.id === id);
        if (pokemon) {
            const tile = document.querySelector(`[data-pokemon-id='${pokemon.id}']`);
            tile.innerHTML = `<img src="${pokemon.image}" alt="${pokemon.name}">`;
            tile.classList.add('revealed');
            if (pokemon.isShiny) {
                tile.classList.add('shiny');
            }
            if (pokemon.types.length === 1) {
                tile.style.backgroundColor = typeColors[pokemon.types[0]];
            } else {
                tile.style.background = `linear-gradient(to right, ${typeColors[pokemon.types[0]]}, ${typeColors[pokemon.types[1]]})`;
            }
            pokemon.types.forEach(type => tile.classList.add(type));
        }
    });

    if (localStorage.getItem('missingNoRevealed') === 'true') {
        const missingNo = {
            name: 'MissingNo.',
            id: 0,
            image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwMCIvPgogIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjcwIiBmaWxsPSIjZmYwMGZmIi8+CiAgPHJlY3QgeD0iNDAiIHk9IjIwIiB3aWR0aD0iMTAiIGhlaWdodD0iNTAiIGZpbGw9IiMwMGZmZmYiLz4KICA8cGF0aCBkPSJNIDYwIDEwIEwgNzAgNTAgTCA2MCA5MCIgc3Ryb2tlPSIjZmYwMDAwIiBzdHJva2Utd2lkdGg9IjUiIGZpbGw9Im5vbmUiLz4KICA8cmVjdCB4PSI4MCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSI4MCIgZmlsbD0iIzAwZmYwMCIvPgogIDxyZWN0IHg9IjUiIHk9IjMwIiB3aWR0aD0iOTAiIGhlaWdodD0iNSIgZmlsbD0iI2ZmZmZmZiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyIvPgogIDxyZWN0IHg9IjUiIHk9IjYwIiB3aWR0aD0iOTAiIGhlaWdodD0iNSIgZmlsbD0iI2ZmZmZmZiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyIvPgo8L3N2Zz4K',
            isShiny: false,
            types: ['bird', 'normal'],
            height: 30,
            weight: 100,
            abilities: [{ ability: { name: 'glitch' } }],
            description: 'A glitch Pokémon that is said to appear when the game\'s data becomes corrupted. Catching it can have unpredictable effects.'
        };
        if (!pokemonData.find(p => p.id === 0)) {
            pokemonData.push(missingNo);
        }
        let tile = document.querySelector('[data-pokemon-id="0"]');
        if (!tile) {
            tile = document.createElement('div');
            tile.classList.add('pokemon-tile');
            pokemonGrid.prepend(tile);
        }
        tile.dataset.pokemonId = missingNo.id;
        tile.innerHTML = `<img src="${missingNo.image}" alt="${missingNo.name}">`;
        tile.classList.add('revealed');
        tile.style.background = `linear-gradient(to right, ${typeColors.flying}, ${typeColors.normal})`;
    }
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

function saveGameState() {
    const revealedPokemonIds = [...document.querySelectorAll('.pokemon-tile.revealed')]
        .map(tile => parseInt(tile.dataset.pokemonId))
        .filter(id => id !== 0);
    localStorage.setItem('revealedPokemon', JSON.stringify(revealedPokemonIds));
    localStorage.setItem('pokemonGameScore', score);

    const shinyPokemonIds = pokemonData.filter(p => p.isShiny).map(p => p.id);
    localStorage.setItem('shinyPokemon', JSON.stringify(shinyPokemonIds));

    if (document.querySelector('[data-pokemon-id="0"].revealed')) {
        localStorage.setItem('missingNoRevealed', 'true');
    }
}

pokemonInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const guessedName = pokemonInput.value.toLowerCase();

        if (normalizeName(guessedName) === 'missingno') {
            document.body.classList.add('glitch');
            setTimeout(() => document.body.classList.remove('glitch'), 1500);

            const missingNo = {
                name: 'MissingNo.',
                id: 0,
                image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwMCIvPgogIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjcwIiBmaWxsPSIjZmYwMGZmIi8+CiAgPHJlY3QgeD0iNDAiIHk9IjIwIiB3aWR0aD0iMTAiIGhlaWdodD0iNTAiIGZpbGw9IiMwMGZmZmYiLz4KICA8cGF0aCBkPSJNIDYwIDEwIEwgNzAgNTAgTCA2MCA5MCIgc3Ryb2tlPSIjZmYwMDAwIiBzdHJva2Utd2lkdGg9IjUiIGZpbGw9Im5vbmUiLz4KICA8cmVjdCB4PSI4MCIgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSI4MCIgZmlsbD0iIzAwZmYwMCIvPgogIDxyZWN0IHg9IjUiIHk9IjMwIiB3aWR0aD0iOTAiIGhlaWdodD0iNSIgZmlsbD0iI2ZmZmZmZiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyIvPgogIDxyZWN0IHg9IjUiIHk9IjYwIiB3aWR0aD0iOTAiIGhlaWdodD0iNSIgZmlsbD0iI2ZmZmZmZiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyIvPgo8L3N2Zz4K',
                isShiny: false,
                types: ['bird', 'normal'],
                height: 30,
                weight: 100,
                abilities: [{ ability: { name: 'glitch' } }],
                description: 'A glitch Pokémon that is said to appear when the game\'s data becomes corrupted. Catching it can have unpredictable effects.'
            };

            if (!pokemonData.find(p => p.id === 0)) {
                pokemonData.push(missingNo);
            }

            let tile = document.querySelector(`[data-pokemon-id='0']`);
            if (!tile) {
                tile = document.createElement('div');
                tile.classList.add('pokemon-tile');
                pokemonGrid.prepend(tile);
            }

            tile.dataset.pokemonId = missingNo.id;
            tile.innerHTML = `<img src="${missingNo.image}" alt="${missingNo.name}">`;
            tile.classList.add('revealed');
            tile.style.background = `linear-gradient(to right, ${typeColors.flying}, ${typeColors.normal})`;

            displayPokemonModal(missingNo);
            pokemonInput.value = '';
            setTimeout(() => feedback.textContent = '', 2000);
            return;
        }

        const normalizedGuessedName = normalizeName(guessedName);
        const pokemon = pokemonData.find(p => normalizeName(p.name) === normalizedGuessedName);

        if (pokemon) {
            almostCorrectPokemon = null;
            const tile = document.querySelector(`[data-pokemon-id='${pokemon.id}']`);
            tile.innerHTML = `<img src="${pokemon.image}" alt="${pokemon.name}">`;
            tile.classList.add('revealed');
            if (pokemon.isShiny) {
                tile.classList.add('shiny');
            }
            if (pokemon.types.length === 1) {
                tile.style.backgroundColor = typeColors[pokemon.types[0]];
            } else {
                tile.style.background = `linear-gradient(to right, ${typeColors[pokemon.types[0]]}, ${typeColors[pokemon.types[1]]})`;
            }
            feedback.textContent = 'Correct!';
            feedback.className = 'correct';
            score++;
            scoreCounter.textContent = `Score: ${score} / 151`;
            saveGameState();
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
    localStorage.removeItem('pokemonGameScore');
    localStorage.removeItem('shinyPokemon');
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

async function displayPokemonModal(pokemon) {
    let description;
    if (pokemon.id === 0) {
        description = pokemon.description;
    } else {
        try {
            const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`);
            const speciesData = await speciesResponse.json();
            const flavorTextEntry = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en');
            description = flavorTextEntry ? flavorTextEntry.flavor_text.replace(/[\n\f]/g, ' ') : 'No description available.';
        } catch (error) {
            console.error(`Error fetching description for Pokémon ID ${pokemon.id}:`, error);
            description = 'Could not retrieve description.';
        }
    }

    document.getElementById('pokemon-name').textContent = pokemon.name;
    const pokemonImage = document.getElementById('pokemon-image');
    pokemonImage.src = pokemon.image;
    pokemonImage.classList.toggle('shiny', pokemon.isShiny);
    document.getElementById('pokemon-height').textContent = `${pokemon.height / 10} m`;
    document.getElementById('pokemon-weight').textContent = `${pokemon.weight / 10} kg`;
    document.getElementById('pokemon-abilities').textContent = pokemon.abilities.map(a => a.ability.name).join(', ');
    document.getElementById('pokemon-description').textContent = description;

    modal.style.display = 'block';
}

pokemonGrid.addEventListener('click', (event) => {
    const tile = event.target.closest('.pokemon-tile');
    if (tile && tile.classList.contains('revealed')) {
        const pokemonId = tile.dataset.pokemonId;
        const pokemon = pokemonData.find(p => p.id == pokemonId);
        if (pokemon) {
            displayPokemonModal(pokemon);
        }
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
setInterval(transformDitto, 30000);
