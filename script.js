const pokemonGrid = document.getElementById('pokemon-grid');
const pokemonInput = document.getElementById('pokemon-input');
const feedback = document.getElementById('feedback');
const muteButton = document.getElementById('mute-button');
const modal = document.getElementById('pokedex-modal');
const closeButton = document.querySelector('.close-button');

let pokemonData = [];
let isMuted = false;

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
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
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

pokemonInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const guessedName = pokemonInput.value.toLowerCase();
        const pokemon = pokemonData.find(p => p.name === guessedName);

        if (pokemon) {
            const tile = document.querySelector(`[data-pokemon-id='${pokemon.id}']`);
            tile.innerHTML = `<img src="${pokemon.image}" alt="${pokemon.name}">`;
            tile.classList.add('revealed');
            pokemon.types.forEach(type => tile.classList.add(type));
            feedback.textContent = 'Correct!';
            feedback.className = 'correct';
            if (!isMuted) {
                const cryUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemon.name}.mp3`;
                const audio = new Audio(cryUrl);
                audio.play();
            }
        } else {
            feedback.textContent = 'Wrong!';
            feedback.className = 'incorrect';
            pokemonInput.classList.add('shake');
            setTimeout(() => pokemonInput.classList.remove('shake'), 500);
        }

        pokemonInput.value = '';
        setTimeout(() => feedback.textContent = '', 2000);
    }
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

fetchPokemonData();
