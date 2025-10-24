const pokemonGrid = document.getElementById('pokemon-grid');
const pokemonInput = document.getElementById('pokemon-input');
const feedback = document.getElementById('feedback');
const muteButton = document.getElementById('mute-button');

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
                types: pokemonDetails.types.map(typeInfo => typeInfo.type.name)
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
    muteButton.textContent = isMuted ? 'Unmute' : 'Mute';
});

fetchPokemonData();
