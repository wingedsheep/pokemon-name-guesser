const pokemonGrid = document.getElementById('pokemon-grid');
const pokemonInput = document.getElementById('pokemon-input');
const feedback = document.getElementById('feedback');

let pokemonData = [];

async function fetchPokemonData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        pokemonData = data.results.map((pokemon, index) => ({
            name: pokemon.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${index + 1}.svg`
        }));
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
            feedback.textContent = 'Correct!';
            feedback.className = 'correct';
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

fetchPokemonData();
