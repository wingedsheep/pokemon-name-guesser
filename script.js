const pokemonGrid = document.getElementById('pokemon-grid');
const pokemonInput = document.getElementById('pokemon-input');
const feedbackContainer = document.getElementById('feedback-container');
const muteButton = document.getElementById('mute-button');
const hintButton = document.getElementById('hint-button');
const resetButton = document.getElementById('reset-button');
const scoreCounter = document.getElementById('score-counter');
const modal = document.getElementById('pokedex-modal');
const gymLeaderModal = document.getElementById('gym-leader-modal');
const itemModal = document.getElementById('item-modal');
const achievementsModal = document.getElementById('achievements-modal');
const pokedexCloseButton = document.querySelector('#pokedex-modal .close-button');
const prevPokemonButton = document.getElementById('prev-pokemon');
const nextPokemonButton = document.getElementById('next-pokemon');
const gymLeaderCloseButton = document.querySelector('#gym-leader-modal .close-button');
const itemModalCloseButton = document.querySelector('#item-modal .close-button');
const achievementsButton = document.getElementById('achievements-button');
const achievementsModalCloseButton = document.querySelector('#achievements-modal .close-button');

let unlockedAchievements = [];
let achievementQueue = [];
let isAchievementBannerVisible = false;

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

const gymLeaders = [
    { name: "Brock", badge: "Boulder Badge", pokemons: [74, 95], image: "http://play.pokemonshowdown.com/sprites/trainers/brock.png" },
    { name: "Misty", badge: "Cascade Badge", pokemons: [120, 121], image: "http://play.pokemonshowdown.com/sprites/trainers/misty.png" },
    { name: "Lt. Surge", badge: "Thunder Badge", pokemons: [100, 25, 26], image: "http://play.pokemonshowdown.com/sprites/trainers/ltsurge.png" },
    { name: "Erika", badge: "Rainbow Badge", pokemons: [71, 114, 45], image: "http://play.pokemonshowdown.com/sprites/trainers/erika.png" },
    { name: "Koga", badge: "Soul Badge", pokemons: [109, 89, 109, 110], image: "http://play.pokemonshowdown.com/sprites/trainers/koga.png" },
    { name: "Sabrina", badge: "Marsh Badge", pokemons: [64, 122, 49, 65], image: "http://play.pokemonshowdown.com/sprites/trainers/sabrina.png" },
    { name: "Blaine", badge: "Volcano Badge", pokemons: [58, 77, 78, 59], image: "http://play.pokemonshowdown.com/sprites/trainers/blaine.png" },
    { name: "Giovanni", badge: "Earth Badge", pokemons: [111, 51, 31, 34, 112], image: "http://play.pokemonshowdown.com/sprites/trainers/giovanni.png" }
];

let pokemonData = [];
let isMuted = false;
let almostCorrectPokemon = null;
let score = 0;
let isWaitingForPokemonToEvolve = false;
let currentPokemonId = null;

async function handleRareCandyEvolution(pokemonName) {
    isWaitingForPokemonToEvolve = false; // Reset state immediately

    const basePokemon = pokemonData.find(p => normalizeName(p.name) === pokemonName);
    const basePokemonTile = document.querySelector(`[data-pokemon-id='${basePokemon?.id}']`);

    if (!basePokemon || !basePokemonTile || !basePokemonTile.classList.contains('revealed')) {
        feedbackContainer.textContent = 'You must choose a Pokémon you have already revealed.';
        feedbackContainer.className = 'incorrect';
        setTimeout(() => feedbackContainer.textContent = '', 3000);
        return;
    }

    try {
        const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${basePokemon.id}`);
        if (!speciesResponse.ok) throw new Error('Could not fetch species data.');
        const speciesData = await speciesResponse.json();

        const evolutionChainUrl = speciesData.evolution_chain.url;
        const evolutionResponse = await fetch(evolutionChainUrl);
        if (!evolutionResponse.ok) throw new Error('Could not fetch evolution data.');
        const evolutionData = await evolutionResponse.json();

        function findEvolution(stage) {
            if (stage.species.name === basePokemon.name) {
                if (stage.evolves_to.length > 0) {
                    return stage.evolves_to[0].species.name;
                }
                return null;
            }

            for (const nextStage of stage.evolves_to) {
                const found = findEvolution(nextStage);
                if (found) {
                    return found;
                }
            }
            return null;
        }

        const evolutionTargetName = findEvolution(evolutionData.chain);

        if (!evolutionTargetName) {
            feedbackContainer.textContent = `${basePokemon.name} can't evolve any further.`;
            feedbackContainer.className = 'incorrect';
            setTimeout(() => feedbackContainer.textContent = '', 3000);
            return;
        }

        const evolutionPokemonData = pokemonData.find(p => p.name === evolutionTargetName);
        const evolutionTile = evolutionPokemonData ? document.querySelector(`[data-pokemon-id='${evolutionPokemonData.id}']`) : null;

        if (evolutionTile && evolutionTile.classList.contains('revealed')) {
            feedbackContainer.textContent = `${evolutionTargetName} has already been revealed.`;
            feedbackContainer.className = 'incorrect';
            setTimeout(() => feedbackContainer.textContent = '', 3000);
            return;
        }

        let evolutionDetails = evolutionPokemonData;
        if (!evolutionDetails) {
             const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${evolutionTargetName}`);
             const details = await response.json();
             evolutionDetails = {
                name: details.name,
                id: details.id,
                image: `https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${details.id}.svg`,
                isShiny: Math.random() < 1 / 100,
                types: details.types.map(typeInfo => typeInfo.type.name),
                height: details.height,
                weight: details.weight,
                abilities: details.abilities
            };
            pokemonData.push(evolutionDetails);
            pokemonData.sort((a,b) => a.id - b.id);
        }

        const itemMessage = document.getElementById('item-message');
        const itemImageContainer = document.getElementById('item-image-container');

        itemMessage.textContent = `What? ${basePokemon.name} is evolving!`;
        itemImageContainer.innerHTML = `<img src="${basePokemon.image}" alt="${basePokemon.name}">`;
        itemModal.style.display = 'block';

        let isBaseForm = true;
        const evolutionInterval = setInterval(() => {
            itemImageContainer.innerHTML = `<img src="${isBaseForm ? evolutionDetails.image : basePokemon.image}" alt="Evolution">`;
            isBaseForm = !isBaseForm;
        }, 500);

        setTimeout(() => {
            clearInterval(evolutionInterval);
            itemModal.style.display = 'none';

            let tileToReveal = document.querySelector(`[data-pokemon-id='${evolutionDetails.id}']`);
            if(!tileToReveal) {
                 tileToReveal = document.createElement('div');
                 tileToReveal.classList.add('pokemon-tile');
                 tileToReveal.dataset.pokemonId = evolutionDetails.id;
                 const tiles = Array.from(pokemonGrid.children);
                 const nextPokemonTile = tiles.find(t => parseInt(t.dataset.pokemonId) > evolutionDetails.id);
                 if (nextPokemonTile) {
                     pokemonGrid.insertBefore(tileToReveal, nextPokemonTile);
                 } else {
                     pokemonGrid.appendChild(tileToReveal);
                 }
            }

            revealPokemon(evolutionDetails, tileToReveal);
            score++;
            scoreCounter.textContent = `Score: ${score} / 151`;
            localStorage.setItem('rareCandyUsed', 'true');
            saveGameState();
            feedbackContainer.textContent = `Congratulations! Your ${basePokemon.name} evolved into ${evolutionDetails.name}!`;
            feedbackContainer.className = 'correct';
            setTimeout(() => feedbackContainer.textContent = '', 3000);

        }, 3000);

    } catch (error) {
        console.error('Error during evolution:', error);
        feedbackContainer.textContent = 'Something went wrong with the evolution process.';
        feedbackContainer.className = 'incorrect';
        setTimeout(() => feedbackContainer.textContent = '', 3000);
    }
}
let gen2Unlocked = false;

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
                isShiny = Math.random() < 1 / 100;
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
        await loadGameState();
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
}

async function loadGameState() {
    gen2Unlocked = localStorage.getItem('gen2Unlocked') === 'true';
    const revealedPokemonIds = JSON.parse(localStorage.getItem('revealedPokemon')) || [];
    unlockedAchievements = JSON.parse(localStorage.getItem('unlockedAchievements')) || [];
    score = revealedPokemonIds.length;
    updateScoreDisplay();

    for (const id of revealedPokemonIds) {
        let pokemon = pokemonData.find(p => p.id === id);

        if (!pokemon && id > 151 && id <= 251) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if (!response.ok) continue;
                const pokemonDetails = await response.json();

                const shinyPokemonIds = JSON.parse(localStorage.getItem('shinyPokemon')) || [];
                let isShiny = shinyPokemonIds.includes(pokemonDetails.id);

                pokemon = {
                    name: pokemonDetails.name,
                    id: pokemonDetails.id,
                    image: `https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemonDetails.id}.svg`,
                    isShiny: isShiny,
                    types: pokemonDetails.types.map(typeInfo => typeInfo.type.name),
                    height: pokemonDetails.height,
                    weight: pokemonDetails.weight,
                    abilities: pokemonDetails.abilities
                };
                pokemonData.push(pokemon);
                pokemonData.sort((a, b) => a.id - b.id);
            } catch (error) {
                console.error(`Error fetching revealed Gen 2 Pokémon with id ${id}:`, error);
                continue;
            }
        }

        if (pokemon) {
            const tile = document.querySelector(`[data-pokemon-id='${pokemon.id}']`);
            if (tile) {
                revealPokemon(pokemon, tile);
            }
        }
    }

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

    if (localStorage.getItem('snorlaxAwake') === 'true') {
        const snorlaxTile = document.querySelector('[data-pokemon-id="143"]');
        if (snorlaxTile && snorlaxTile.classList.contains('revealed')) {
            const snorlaxImage = snorlaxTile.querySelector('img');
            snorlaxImage.src = 'https://mystickermania.com/cdn/stickers/pokemon/pkm-snorlax-waves-hand-512x512.png';
        }
    }
}

function createPokemonGrid() {
    for (let i = 1; i <= 251; i++) {
        const tile = document.createElement('div');
        tile.classList.add('pokemon-tile');
        tile.dataset.pokemonId = i;
        if (i > 151) {
            tile.classList.add('gen2-placeholder');
        } else {
            tile.textContent = i;
        }
        pokemonGrid.appendChild(tile);
    }
}

function revealPokemon(pokemon, tile) {
    tile.innerHTML = `<img src="${pokemon.image}" alt="${pokemon.name}">`;
    tile.classList.add('revealed');
    tile.classList.remove('gen2-placeholder');
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

function updateScoreDisplay() {
    const total = gen2Unlocked ? 251 : 151;
    scoreCounter.textContent = `Score: ${score} / ${total}`;
}

function saveGameState() {
    const revealedPokemonIds = [...document.querySelectorAll('.pokemon-tile.revealed')]
        .map(tile => parseInt(tile.dataset.pokemonId))
        .filter(id => id !== 0);
    localStorage.setItem('revealedPokemon', JSON.stringify(revealedPokemonIds));
    localStorage.setItem('pokemonGameScore', score);

    const shinyPokemonIds = pokemonData.filter(p => p.isShiny).map(p => p.id);
    localStorage.setItem('shinyPokemon', JSON.stringify(shinyPokemonIds));
    localStorage.setItem('gen2Unlocked', gen2Unlocked);
    localStorage.setItem('unlockedAchievements', JSON.stringify(unlockedAchievements));

    if (document.querySelector('[data-pokemon-id="0"].revealed')) {
        localStorage.setItem('missingNoRevealed', 'true');
    }
}

pokemonInput.addEventListener('input', () => {
    if (feedbackContainer.classList.contains('hint')) {
        feedbackContainer.textContent = '';
        feedbackContainer.className = '';
    }
});

pokemonInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        const guessedName = pokemonInput.value.toLowerCase();
        const normalizedGuessedName = normalizeName(guessedName);

        if (isWaitingForPokemonToEvolve) {
            handleRareCandyEvolution(normalizedGuessedName);
            pokemonInput.value = '';
            return;
        }

        if (handleItemGuess(normalizedGuessedName)) {
            pokemonInput.value = '';
            return;
        }

        const leader = gymLeaders.find(l => normalizeName(l.name) === normalizedGuessedName);
        if (leader) {
            displayGymLeaderModal(leader);
            pokemonInput.value = '';
            feedbackContainer.textContent = `You've met Gym Leader ${leader.name}!`;
            feedbackContainer.className = 'correct';
            return;
        }

        if (normalizedGuessedName === 'nidoran') {
            const nidorans = [
                pokemonData.find(p => p.name === 'nidoran-f'),
                pokemonData.find(p => p.name === 'nidoran-m')
            ].filter(Boolean);

            let newlyRevealed = 0;

            for (const nidoran of nidorans) {
                const tile = document.querySelector(`[data-pokemon-id='${nidoran.id}']`);
                if (tile && !tile.classList.contains('revealed')) {
                    revealPokemon(nidoran, tile);
                    newlyRevealed++;
                }
            }

            if (newlyRevealed > 0) {
                feedbackContainer.textContent = 'Correct!';
                feedbackContainer.className = 'correct';
                score += newlyRevealed;
                updateScoreDisplay();
                saveGameState();
                if (!isMuted) {
                    new Audio(`https://play.pokemonshowdown.com/audio/cries/nidoranf.mp3`).play();
                    new Audio(`https://play.pokemonshowdown.com/audio/cries/nidoranm.mp3`).play();
                }
            } else {
                feedbackContainer.textContent = 'You have already revealed both Nidorans!';
                feedbackContainer.className = 'incorrect';
            }

            pokemonInput.value = '';
            return;
        }

        if (normalizedGuessedName === 'missingno') {
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
            return;
        }

        const pokemon = pokemonData.find(p => normalizeName(p.name) === normalizedGuessedName);

        if (pokemon) {
            const tile = document.querySelector(`[data-pokemon-id='${pokemon.id}']`);
            if (tile.classList.contains('revealed')) {
                feedbackContainer.textContent = 'You have already discovered this Pokémon!';
                feedbackContainer.className = 'incorrect';
            } else {
                almostCorrectPokemon = null;
                revealPokemon(pokemon, tile);
                feedbackContainer.textContent = 'Correct!';
                feedbackContainer.className = 'correct';
                score++;
                updateScoreDisplay();
                checkAchievements();
                saveGameState();
                if (!isMuted) {
                    const cryUrl = `https://play.pokemonshowdown.com/audio/cries/${pokemon.name}.mp3`;
                    const audio = new Audio(cryUrl);
                    audio.play();
                }
            }
        } else {
            let foundGen2Pokemon = false;
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${normalizedGuessedName}`);
                if (response.ok) {
                    const pokemonDetails = await response.json();
                    if (pokemonDetails.id > 151 && pokemonDetails.id <= 251) {
                        foundGen2Pokemon = true;
                        const shinyPokemonIds = JSON.parse(localStorage.getItem('shinyPokemon')) || [];
                        let isShiny = shinyPokemonIds.includes(pokemonDetails.id);
                        if (!localStorage.getItem('shinyPokemon')) {
                            isShiny = Math.random() < 1 / 150;
                        }

                        const newPokemon = {
                            name: pokemonDetails.name,
                            id: pokemonDetails.id,
                            image: `https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemonDetails.id}.svg`,
                            isShiny: isShiny,
                            types: pokemonDetails.types.map(typeInfo => typeInfo.type.name),
                            height: pokemonDetails.height,
                            weight: pokemonDetails.weight,
                            abilities: pokemonDetails.abilities
                        };

                        pokemonData.push(newPokemon);
                        pokemonData.sort((a, b) => a.id - b.id);

                        const tile = document.querySelector(`[data-pokemon-id='${newPokemon.id}']`);
                        if (!gen2Unlocked) {
                            gen2Unlocked = true;
                        }
                        revealPokemon(newPokemon, tile);

                        feedbackContainer.textContent = 'Correct!';
                        feedbackContainer.className = 'correct';
                        score++;
                        updateScoreDisplay();
                        checkAchievements();
                        saveGameState();
                        if (!isMuted) {
                            const cryUrl = `https://play.pokemonshowdown.com/audio/cries/${newPokemon.name}.mp3`;
                            const audio = new Audio(cryUrl);
                            audio.play();
                        }
                    }
                }
            } catch (error) {
                console.error("Error fetching gen 2 pokemon", error);
            }

            if (!foundGen2Pokemon) {
                if (almostCorrectPokemon) {
                    feedbackContainer.textContent = `The correct spelling was ${almostCorrectPokemon.name}!`;
                    feedbackContainer.className = 'incorrect';
                    almostCorrectPokemon = null;
                } else {
                    const revealedPokemonIds = [...document.querySelectorAll('.pokemon-tile.revealed')].map(tile => parseInt(tile.dataset.pokemonId));
                    const unrevealedPokemon = pokemonData.filter(p => !revealedPokemonIds.includes(p.id));
                    let foundAlmostCorrect = false;
                    for (const p of unrevealedPokemon) {
                        if (levenshteinDistance(normalizedGuessedName, normalizeName(p.name)) <= 2) {
                            almostCorrectPokemon = p;
                            feedbackContainer.textContent = 'You are very close! Almost there!';
                            feedbackContainer.className = 'incorrect';
                            foundAlmostCorrect = true;
                            break;
                        }
                    }
                    if (!foundAlmostCorrect) {
                        feedbackContainer.textContent = 'Wrong!';
                        feedbackContainer.className = 'incorrect';
                    }
                }
                pokemonInput.classList.add('shake');
                setTimeout(() => pokemonInput.classList.remove('shake'), 500);
            }
        }

        pokemonInput.value = '';
    }
});

hintButton.addEventListener('click', () => {
    if (feedbackContainer.classList.contains('hint')) {
        feedbackContainer.textContent = '';
        feedbackContainer.className = '';
        return;
    }

    const revealedPokemonIds = [...document.querySelectorAll('.pokemon-tile.revealed')].map(tile => parseInt(tile.dataset.pokemonId));
    const unrevealedPokemon = pokemonData.filter(p => p.id <= 151 && !revealedPokemonIds.includes(p.id));

    if (unrevealedPokemon.length > 0) {
        const randomPokemon = unrevealedPokemon[Math.floor(Math.random() * unrevealedPokemon.length)];
        const hints = pokemonHints[randomPokemon.id];
        if (hints && hints.length > 0) {
            const randomHint = hints[Math.floor(Math.random() * hints.length)];
            feedbackContainer.textContent = `${randomHint}`;
        } else {
            feedbackContainer.textContent = `Starts with '${randomPokemon.name.charAt(0)}', ends with '${randomPokemon.name.charAt(randomPokemon.name.length - 1)}'.`;
        }
        feedbackContainer.className = 'hint';
    } else {
        feedbackContainer.textContent = 'All Pokémon have been guessed!';
        feedbackContainer.className = 'incorrect';
    }
});

resetButton.addEventListener('click', () => {
    localStorage.removeItem('revealedPokemon');
    localStorage.removeItem('pokemonGameScore');
    localStorage.removeItem('shinyPokemon');
    localStorage.removeItem('snorlaxAwake');
    localStorage.removeItem('rareCandyUsed');
    localStorage.removeItem('gen2Unlocked');
    localStorage.removeItem('unlockedAchievements');
    localStorage.removeItem('missingNoRevealed')
    location.reload();
});

muteButton.addEventListener('click', () => {
    isMuted = !isMuted;
    muteButton.classList.toggle('muted', isMuted);
});

pokedexCloseButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

gymLeaderCloseButton.addEventListener('click', () => {
    gymLeaderModal.style.display = 'none';
});

itemModalCloseButton.addEventListener('click', () => {
    itemModal.style.display = 'none';
});

achievementsButton.addEventListener('click', () => {
    renderAchievements();
    achievementsModal.style.display = 'block';
});

achievementsModalCloseButton.addEventListener('click', () => {
    achievementsModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
    if (event.target == gymLeaderModal) {
        gymLeaderModal.style.display = 'none';
    }
    if (event.target == itemModal) {
        itemModal.style.display = 'none';
    }
    if (event.target == achievementsModal) {
        achievementsModal.style.display = 'none';
    }
});

prevPokemonButton.addEventListener('click', () => navigatePokemon(-1));
nextPokemonButton.addEventListener('click', () => navigatePokemon(1));

window.addEventListener('keydown', (event) => {
    if (modal.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            navigatePokemon(-1);
        } else if (event.key === 'ArrowRight') {
            navigatePokemon(1);
        }
    }
});

function navigatePokemon(direction) {
    if (currentPokemonId === null) return;

    const revealedPokemonIds = pokemonData
        .filter(p => {
            const tile = document.querySelector(`[data-pokemon-id='${p.id}']`);
            return tile && tile.classList.contains('revealed');
        })
        .map(p => p.id)
        .sort((a, b) => a - b);

    const currentIndex = revealedPokemonIds.indexOf(currentPokemonId);
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) {
        nextIndex = revealedPokemonIds.length - 1;
    } else if (nextIndex >= revealedPokemonIds.length) {
        nextIndex = 0;
    }

    const nextPokemonId = revealedPokemonIds[nextIndex];
    const nextPokemon = pokemonData.find(p => p.id === nextPokemonId);

    if (nextPokemon) {
        displayPokemonModal(nextPokemon);
    }
}

function displayGymLeaderModal(leader) {
    document.getElementById('gym-leader-name').textContent = leader.name;
    document.getElementById('gym-leader-badge').textContent = leader.badge;
    document.getElementById('gym-leader-image').src = leader.image;

    const pokemonGrid = document.getElementById('gym-leader-pokemon-grid');
    pokemonGrid.innerHTML = '';

    leader.pokemons.forEach(pokemonId => {
        const pokemonImage = document.createElement('img');
        pokemonImage.src = `https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemonId}.svg`;
        pokemonGrid.appendChild(pokemonImage);
    });

    gymLeaderModal.style.display = 'block';
}

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
    const localImagePath = `pokedex-images/${pokemon.id}.png`;

    pokemonImage.onerror = () => {
        pokemonImage.src = pokemon.image;
        pokemonImage.classList.add('fallback-image');
        pokemonImage.onerror = null; // Prevent infinite loops
    };
    pokemonImage.onload = () => {
        pokemonImage.classList.remove('fallback-image');
    };
    pokemonImage.src = localImagePath;

    pokemonImage.classList.toggle('shiny', pokemon.isShiny);
    document.getElementById('pokemon-height').textContent = `${pokemon.height / 10} m`;
    document.getElementById('pokemon-weight').textContent = `${pokemon.weight / 10} kg`;
    document.getElementById('pokemon-abilities').textContent = pokemon.abilities.map(a => a.ability.name).join(', ');
    document.getElementById('pokemon-description').textContent = description;
    document.getElementById('pokemon-number').textContent = `#${pokemon.id.toString().padStart(3, '0')}`;
    currentPokemonId = pokemon.id;

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

function handleItemGuess(normalizedGuessedName) {
    const eeveeTile = document.querySelector('[data-pokemon-id="133"]');
    const eeveeRevealed = eeveeTile && eeveeTile.classList.contains('revealed');

    if (eeveeRevealed) {
        let evolution = null;
        if (normalizedGuessedName === 'waterstone') {
            evolution = pokemonData.find(p => p.id === 134); // Vaporeon
        } else if (normalizedGuessedName === 'thunderstone') {
            evolution = pokemonData.find(p => p.id === 135); // Jolteon
        } else if (normalizedGuessedName === 'firestone') {
            evolution = pokemonData.find(p => p.id === 136); // Flareon
        }

        if (evolution) {
            const itemMessage = document.getElementById('item-message');
            const itemImageContainer = document.getElementById('item-image-container');

            itemMessage.textContent = 'What? Eevee is evolving!';
            itemImageContainer.innerHTML = `<img src="${eeveeTile.querySelector('img').src}" alt="Eevee">`;
            itemModal.style.display = 'block';

            let isEevee = true;
            const evolutionInterval = setInterval(() => {
                itemImageContainer.innerHTML = `<img src="${isEevee ? evolution.image : eeveeTile.querySelector('img').src}" alt="Evolution">`;
                isEevee = !isEevee;
            }, 500);

            setTimeout(() => {
                clearInterval(evolutionInterval);
                itemModal.style.display = 'none';
                const evolutionTile = document.querySelector(`[data-pokemon-id='${evolution.id}']`);
                if (evolutionTile && !evolutionTile.classList.contains('revealed')) {
                    evolutionTile.innerHTML = `<img src="${evolution.image}" alt="${evolution.name}">`;
                    evolutionTile.classList.add('revealed');
                    if (evolution.isShiny) {
                        evolutionTile.classList.add('shiny');
                    }
                    if (evolution.types.length === 1) {
                        evolutionTile.style.backgroundColor = typeColors[evolution.types[0]];
                    } else {
                        evolutionTile.style.background = `linear-gradient(to right, ${typeColors[evolution.types[0]]}, ${typeColors[evolution.types[1]]})`;
                    }
                    score++;
                    scoreCounter.textContent = `Score: ${score} / 151`;
                    checkAchievements();
                    saveGameState();
                }
            }, 3000);
            return true;
        }
    }

    let fossil = null;
    if (normalizedGuessedName === 'helixfossil') {
        fossil = pokemonData.find(p => p.id === 138); // Omanyte
    } else if (normalizedGuessedName === 'domefossil') {
        fossil = pokemonData.find(p => p.id === 140); // Kabuto
    }

    if (fossil) {
        const fossilTile = document.querySelector(`[data-pokemon-id='${fossil.id}']`);
        if (fossilTile && !fossilTile.classList.contains('revealed')) {
            fossilTile.innerHTML = `<img src="${fossil.image}" alt="${fossil.name}">`;
            fossilTile.classList.add('revealed');
            if (fossil.isShiny) {
                fossilTile.classList.add('shiny');
            }
            if (fossil.types.length === 1) {
                fossilTile.style.backgroundColor = typeColors[fossil.types[0]];
            } else {
                fossilTile.style.background = `linear-gradient(to right, ${typeColors[fossil.types[0]]}, ${typeColors[fossil.types[1]]})`;
            }
            score++;
            scoreCounter.textContent = `Score: ${score} / 151`;
            checkAchievements();
            saveGameState();

            const itemMessage = document.getElementById('item-message');
            itemMessage.textContent = `The ${normalizedGuessedName.replace('fossil', ' fossil')} has been revived into ${fossil.name}!`;
            document.getElementById('item-image-container').innerHTML = `<img src="${fossil.image}" alt="${fossil.name}">`;
            itemModal.style.display = 'block';
        }
        return true;
    }

    if (normalizedGuessedName === 'pokeflute') {
        const snorlaxTile = document.querySelector('[data-pokemon-id="143"]');
        if (snorlaxTile && snorlaxTile.classList.contains('revealed')) {
            const snorlaxImage = snorlaxTile.querySelector('img');
            snorlaxImage.src = 'https://mystickermania.com/cdn/stickers/pokemon/pkm-snorlax-waves-hand-512x512.png';
            localStorage.setItem('snorlaxAwake', 'true');
            feedbackContainer.textContent = 'Snorlax woke up!';
            feedbackContainer.className = 'correct';
        } else {
            feedbackContainer.textContent = 'A large Pokémon is blocking the path!';
            feedbackContainer.className = '';
        }
        return true;
    }

    if (normalizedGuessedName === 'rarecandy') {
        if (localStorage.getItem('rareCandyUsed') === 'true') {
            feedbackContainer.textContent = 'You have already used your Rare Candy.';
            feedbackContainer.className = 'incorrect';
        } else {
            feedbackContainer.textContent = 'Which Pokémon will you give the Rare Candy to?';
            feedbackContainer.className = '';
            isWaitingForPokemonToEvolve = true;
        }
        return true;
    }

    return false;
}

fetchPokemonData();
setInterval(transformDitto, 30000);

function renderAchievements() {
    const achievementsGrid = document.getElementById('achievements-grid');
    achievementsGrid.innerHTML = '';

    for (const id in achievements) {
        const achievement = achievements[id];
        const badge = document.createElement('div');
        badge.classList.add('achievement-badge');
        const isUnlocked = unlockedAchievements.includes(id);

        if (!isUnlocked) {
            badge.classList.add('locked');
        }

        const tooltipName = isUnlocked ? achievement.name : 'Locked Achievement';
        const tooltipDescription = isUnlocked ? achievement.description : 'Guess more Pokémon to unlock!';

        badge.innerHTML = `
            ${achievement.icon}
            <div class="tooltip">
                <h4>${tooltipName}</h4>
                <p>${tooltipDescription}</p>
            </div>
        `;
        achievementsGrid.appendChild(badge);
    }
}

function checkAchievements() {
    const revealedPokemonIds = new Set(
        [...document.querySelectorAll('.pokemon-tile.revealed')]
        .map(tile => parseInt(tile.dataset.pokemonId))
    );

    let newAchievementsUnlocked = false;
    for (const id in achievements) {
        if (!unlockedAchievements.includes(id)) {
            const achievement = achievements[id];
            const requiredPokemon = new Set(achievement.pokemon);
            const isCompleted = [...requiredPokemon].every(pokemonId => revealedPokemonIds.has(pokemonId));

            if (isCompleted) {
                unlockedAchievements.push(id);
                achievementQueue.push(achievement);
                newAchievementsUnlocked = true;
            }
        }
    }
    if (newAchievementsUnlocked) {
        processAchievementQueue();
    }
}

function processAchievementQueue() {
    if (isAchievementBannerVisible || achievementQueue.length === 0) {
        return;
    }
    const achievement = achievementQueue.shift();
    showAchievementBanner(achievement);
}

function showAchievementBanner(achievement) {
    isAchievementBannerVisible = true;
    let banner = document.getElementById('achievement-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'achievement-banner';
        document.body.appendChild(banner);
    }

    banner.innerHTML = `
        ${achievement.icon}
        <span><strong>${achievement.name}</strong> Unlocked!</span>
    `;

    banner.classList.add('show');
    setTimeout(() => {
        banner.classList.remove('show');
        isAchievementBannerVisible = false;
        processAchievementQueue();
    }, 4000);
}
