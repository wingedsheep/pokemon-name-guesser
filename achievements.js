const achievements = {
  // Kanto Champion
  "kanto-champion": {
    name: "Kanto Champion",
    description: "Guess all 151 original Pokémon.",
    pokemon: Array.from({ length: 151 }, (_, i) => i + 1),
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#FFD700" stroke-width="2" fill="none"/>
        <path d="M 8 8 L 16 8 L 16 12 L 12 16 L 8 12 Z" fill="#FFD700" stroke="#DAA520" stroke-width="1"/>
        <path d="M 12 6 V 8" stroke="#FFD700" stroke-width="2" fill="none"/>
        <path d="M 10 4 L 14 4" stroke="#FFD700" stroke-width="2" fill="none"/>
      </svg>`
  },

  // Location-based achievements
  "pallet-town": {
    name: "Pallet Town Rookie",
    description: "Guess all Pokémon available in Pallet Town.",
    pokemon: [1, 4, 7],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="none"/>
        <path d="M 6 12 L 12 6 L 18 12" fill="none" stroke="#CD853F" stroke-width="2"/>
        <path d="M 8 12 V 18 H 16 V 12" fill="#F4A460" stroke="#CD853F" stroke-width="1"/>
        <rect x="11" y="14" width="2" height="4" fill="#A0522D"/>
      </svg>`
  },
  "route-1": {
    name: "Route 1 Wanderer",
    description: "Guess all Pokémon found on Route 1.",
    pokemon: [16, 19],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="none"/>
        <path d="M 8 6 V 18 M 16 6 V 18" stroke="#228B22" stroke-width="2"/>
        <path d="M 6 12 H 18" stroke="#D2B48C" stroke-width="2"/>
      </svg>`
  },
  "viridian-city": {
    name: "Viridian City Fisher",
    description: "Guess all Pokémon found in Viridian City.",
    pokemon: [60, 118],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#ADD8E6"/>
        <path d="M 8 10 A 4 4 0 0 1 16 10" fill="none" stroke="#4682B4" stroke-width="2"/>
        <path d="M 8 14 A 4 4 0 0 0 16 14" fill="none" stroke="#4682B4" stroke-width="2"/>
      </svg>`
  },
    "route-22": {
    name: "Route 22 Challenger",
    description: "Guess all Pokémon on Route 22.",
    pokemon: [19, 21, 56, 60, 118],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="none"/>
        <path d="M 8 8 L 16 8 M 8 16 L 16 16" stroke="#A0522D" stroke-width="2"/>
        <path d="M 12 8 V 16" stroke="#228B22" stroke-width="2"/>
      </svg>`
  },
  "route-2": {
    name: "Route 2 Collector",
    description: "Guess all Pokémon on Route 2.",
    pokemon: [16, 19, 10, 13, 25],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="none"/>
        <path d="M 8 16 V 8 L 16 8 V 16 H 8" fill="#90EE90" stroke="#2E8B57" stroke-width="1"/>
      </svg>`
  },
  "viridian-forest": {
    name: "Viridian Forest Explorer",
    description: "Guess all Pokémon from Viridian Forest.",
    pokemon: [10, 11, 13, 14, 25],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#228B22"/>
        <path d="M 12 6 L 8 12 H 16 L 12 6 Z" fill="#9ACD32" stroke="#6B8E23" stroke-width="1"/>
        <path d="M 12 12 V 18" stroke="#8B4513" stroke-width="2"/>
        <path d="M 10 16 H 14" stroke="#8B4513" stroke-width="2"/>
      </svg>`
  },
  "route-3": {
    name: "Route 3 Adventurer",
    description: "Guess all Pokémon on Route 3.",
    pokemon: [16, 19, 21, 39, 56],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="none"/>
        <path d="M 8 8 L 16 8" stroke="#A0522D" stroke-width="2"/>
        <path d="M 16 12 L 8 12" stroke="#D2B48C" stroke-width="2"/>
        <path d="M 8 16 L 16 16" stroke="#228B22" stroke-width="2"/>
      </svg>`
  },
  "mt-moon": {
    name: "Mt. Moon Mountaineer",
    description: "Guess all Pokémon within Mt. Moon.",
    pokemon: [41, 74, 46, 35],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#B0C4DE"/>
        <path d="M 6 18 L 10 10 L 14 14 L 18 8" stroke="#708090" stroke-width="2" fill="none"/>
        <circle cx="17" cy="6" r="2" fill="#FFFACD" stroke="#F0E68C" stroke-width="1"/>
      </svg>`
  },
  "route-4": {
    name: "Route 4 Roamer",
    description: "Guess all Pokémon on Route 4.",
    pokemon: [19, 21, 23, 27],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="none"/>
        <path d="M 12 6 V 18" stroke="#228B22" stroke-width="2"/>
        <path d="M 8 12 L 16 12" stroke="#D2B48C" stroke-width="2"/>
        <path d="M 8 12 L 12 18" stroke="#A0522D" stroke-width="2"/>
      </svg>`
  },
  "cerulean-city": {
    name: "Cerulean City Diver",
    description: "Guess all Pokémon in Cerulean City.",
    pokemon: [60, 118, 129, 54, 98],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#B0E0E6"/>
        <path d="M 6 10 A 6 6 0 0 1 18 10" stroke="#4169E1" stroke-width="2" fill="none"/>
        <path d="M 8 14 L 16 14" stroke="#1E90FF" stroke-width="2"/>
      </svg>`
  },
  "routes-24-25": {
    name: "Nugget Bridge Navigator",
    description: "Guess all Pokémon on Routes 24 & 25.",
    pokemon: [10, 11, 13, 14, 16, 63, 69, 43],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#E6E6FA"/>
        <rect x="10" y="6" width="4" height="12" fill="#DAA520"/>
        <path d="M 8 10 L 16 10 M 8 14 L 16 14" stroke="#CD853F" stroke-width="1"/>
      </svg>`
  },
  "routes-5-6": {
    name: "Underground Path User",
    description: "Guess all Pokémon on Routes 5 & 6.",
    pokemon: [16, 52, 69, 43, 54, 118],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="none"/>
        <path d="M 8 10 H 16 V 14 H 8 Z" fill="#A9A9A9" stroke="#696969" stroke-width="1"/>
        <path d="M 12 10 V 6 M 12 14 V 18" stroke="#D2B48C" stroke-width="2"/>
      </svg>`
  },
  "digletts-cave": {
    name: "Diglett's Cave Dweller",
    description: "Guess all Pokémon in Diglett's Cave.",
    pokemon: [50, 51],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#8B4513"/>
        <rect x="9" y="12" width="6" height="4" fill="#CD853F"/>
        <rect x="7" y="14" width="2" height="2" fill="#D2B48C"/>
        <rect x="15" y="14" width="2" height="2" fill="#D2B48C"/>
      </svg>`
  },
  "route-11": {
    name: "Route 11 Tamer",
    description: "Guess all Pokémon on Route 11.",
    pokemon: [21, 96, 23, 27],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="none"/>
        <path d="M 8 8 H 16 M 8 12 H 16 M 8 16 H 16" stroke="#8FBC8F" stroke-width="2"/>
      </svg>`
  },
  "vermilion-city": {
    name: "Vermilion City Sailor",
    description: "Guess all Pokémon in Vermilion City.",
    pokemon: [60, 116, 98, 129, 118],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#F0E68C"/>
        <path d="M 8 12 L 12 8 L 16 12 L 12 16 Z" fill="#FFA500" stroke="#FF8C00" stroke-width="1"/>
      </svg>`
  },
  "rock-tunnel": {
    name: "Rock Tunnel Survivor",
    description: "Guess all Pokémon in Rock Tunnel.",
    pokemon: [41, 74, 66, 95],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#696969"/>
        <rect x="8" y="8" width="8" height="8" fill="#A9A9A9"/>
      </svg>`
  },
  "pokemon-tower": {
    name: "Pokémon Tower Ghostbuster",
    description: "Guess all Pokémon in the Pokémon Tower.",
    pokemon: [92, 93, 104],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#E6E6FA"/>
        <path d="M 9 10 C 9 8 11 8 12 9 C 13 8 15 8 15 10 S 13 14 12 15 C 11 14 9 12 9 10 Z" fill="#9370DB" stroke="#8A2BE2" stroke-width="1"/>
        <rect x="11" y="15" width="2" height="3" fill="#9932CC"/>
      </svg>`
  },
  "celadon-city": {
    name: "Celadon City Gambler",
    description: "Guess all Pokémon from Celadon City.",
    pokemon: [63, 35, 147, 123, 127, 137],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#F5F5DC"/>
        <rect x="8" y="10" width="8" height="4" fill="#FF6347" stroke="#CD5C5C" stroke-width="1"/>
        <path d="M 10 10 V 8 M 14 10 V 8 M 10 14 V 16 M 14 14 V 16" stroke="#DC143C" stroke-width="2"/>
      </svg>`
  },
  "safari-zone": {
    name: "Safari Zone Specialist",
    description: "Guess all unique Pokémon from the Safari Zone.",
    pokemon: [29, 30, 32, 33, 47, 48, 102, 111, 113, 115, 128, 123, 127, 147, 148],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#3CB371"/>
        <circle cx="9" cy="12" r="3" fill="none" stroke="#F5F5F5" stroke-width="2"/>
        <circle cx="15" cy="12" r="3" fill="#DC143C" stroke="#B22222" stroke-width="1"/>
        <line x1="12" y1="12" x2="14" y2="10" stroke-width="1" stroke="#F5F5F5"/>
      </svg>`
  },
  "saffron-city": {
    name: "Saffron City Psychic",
    description: "Guess all gift Pokémon from Saffron City.",
    pokemon: [106, 107, 131],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#FFC0CB"/>
        <path d="M 12 8 A 4 4 0 0 0 8 12 A 4 4 0 0 0 12 16" stroke="#FF69B4" stroke-width="2" fill="none"/>
        <path d="M 12 8 A 4 4 0 0 1 16 12 A 4 4 0 0 1 12 16" stroke="#FF1493" stroke-width="2" fill="none"/>
      </svg>`
  },
  "pokemon-mansion": {
    name: "Pokémon Mansion Investigator",
    description: "Guess all Pokémon in the Pokémon Mansion.",
    pokemon: [19, 20, 37, 58, 88, 89, 109, 110, 132],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#A9A9A9"/>
        <rect x="8" y="10" width="8" height="8" fill="#DCDCDC" stroke="#BEBEBE" stroke-width="1"/>
        <path d="M 8 10 L 12 6 L 16 10" stroke="#696969" stroke-width="2" fill="none"/>
        <rect x="11" y="14" width="2" height="4" fill="#4682B4"/>
      </svg>`
  },
  "seafoam-islands": {
    name: "Seafoam Islands Explorer",
    description: "Guess all Pokémon in the Seafoam Islands.",
    pokemon: [41, 42, 54, 79, 86, 87, 144],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#00BFFF"/>
        <path d="M 8 12 L 10 10 L 12 12 L 14 10 L 16 12" stroke="#FFFFFF" stroke-width="2" fill="none"/>
        <path d="M 8 16 L 10 14 L 12 16 L 14 14 L 16 16" stroke="#F0FFFF" stroke-width="2" fill="none"/>
      </svg>`
  },
  "power-plant": {
    name: "Power Plant Technician",
    description: "Guess all Pokémon in the Power Plant.",
    pokemon: [25, 26, 81, 82, 100, 101, 125, 145],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#778899"/>
        <path d="M 12 6 L 10 12 L 14 12 L 12 18" stroke="#FFD700" stroke-width="2" fill="none"/>
      </svg>`
  },
  "victory-road": {
    name: "Victory Road Vanquisher",
    description: "Guess all Pokémon on Victory Road.",
    pokemon: [67, 74, 75, 41, 42, 95, 105, 146],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#C0C0C0"/>
        <path d="M 8 18 L 12 6 L 16 18" stroke="#B8860B" stroke-width="2" fill="none"/>
        <path d="M 10 12 H 14" stroke="#B8860B" stroke-width="2"/>
      </svg>`
  },

  // Special achievements
  "fossil-fanatic": {
    name: "Fossil Fanatic",
    description: "Revive both the Dome and Helix fossils.",
    pokemon: [138, 140],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#DEB887"/>
        <path d="M 12 8 A 4 4 0 0 1 12 16 A 4 4 0 0 1 8 12" stroke="#8B4513" stroke-width="2" fill="none"/>
        <path d="M 12 8 L 16 12" stroke="#8B4513" stroke-width="2" fill="none"/>
      </svg>`
  },
  "eevee-expert": {
    name: "Eevee Expert",
    description: "Evolve Eevee into Vaporeon, Jolteon, and Flareon.",
    pokemon: [134, 135, 136],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#F5DEB3"/>
        <path d="M 12 6 L 8 10 H 16 L 12 6 Z" fill="#6495ED" stroke="#4169E1" stroke-width="1"/>
        <path d="M 8 14 L 12 18 L 16 14 H 8 Z" fill="#FF4500" stroke="#CD5C5C" stroke-width="1"/>
        <path d="M 12 10 V 14" stroke="#FFD700" stroke-width="2"/>
      </svg>`
  },
  "glitch-master": {
    name: "Glitch Master",
    description: "Discover the mysterious MissingNo.",
    pokemon: [0],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#000000"/>
        <path d="M 10 8 L 10 12 H 14 V 10" stroke="#FF00FF" stroke-width="2" fill="none"/>
        <rect x="10" y="14" width="2" height="2" fill="#00FFFF"/>
      </svg>`
  },

  // No-Hint Achievements
  "no-hints-50": {
    name: "Psychic Intuition",
    description: "Guess 50 Pokémon without using any hints.",
    pokemon: [], // Custom logic
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#F85888"/>
        <path d="M 9 12 A 3 4 0 0 1 15 12 A 3 4 0 0 1 9 12" fill="#fff"/>
        <circle cx="12" cy="12" r="1" fill="#000"/>
      </svg>`
  },
  "no-hints-100": {
    name: "Clairvoyant",
    description: "Guess 100 Pokémon without using any hints.",
    pokemon: [], // Custom logic
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#F85888"/>
        <path d="M 9 12 A 3 4 0 0 1 15 12 A 3 4 0 0 1 9 12" fill="#fff"/>
        <circle cx="12" cy="12" r="1" fill="#000"/>
        <path d="M 12 6 L 12 3 M 12 18 L 12 21 M 6 12 L 3 12 M 18 12 L 21 12" stroke="#fff" stroke-width="1"/>
      </svg>`
  },
  "no-hints-151": {
    name: "Mind Reader",
    description: "Guess all 151 original Pokémon without using any hints.",
    pokemon: [], // Custom logic
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#FFD700" stroke-width="2" fill="#F85888"/>
        <path d="M 9 12 A 3 4 0 0 1 15 12 A 3 4 0 0 1 9 12" fill="#fff"/>
        <circle cx="12" cy="12" r="1" fill="#000"/>
        <path d="M 12 6 L 12 2 M 12 18 L 12 22 M 6 12 L 2 12 M 18 12 L 22 12" stroke="#FFD700" stroke-width="2"/>
        <path d="M 9 9 L 6 6 M 15 9 L 18 6 M 9 15 L 6 18 M 15 15 L 18 18" stroke="#FFD700" stroke-width="2"/>
      </svg>`
  },

  // Gen 2 Achievements
  "gen2-unlocked": {
    name: "A New World",
    description: "Guess your first Pokémon from the Johto region.",
    pokemon: [], // Custom logic
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#C0C0C0"/>
        <path d="M 10 8 L 14 8 L 14 12 L 12 12 L 12 14 L 14 14 L 14 16 L 10 16 L 10 12 L 12 12 L 12 10 L 10 10 Z" fill="#fff" stroke="#000" stroke-width="1"/>
      </svg>`
  },
  "johto-champion": {
    name: "Johto Champion",
    description: "Guess all 100 Pokémon from the Johto region.",
    pokemon: Array.from({ length: 100 }, (_, i) => i + 152),
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#FFD700" stroke-width="2" fill="#C0C0C0"/>
        <path d="M 10 8 L 14 8 L 14 12 L 12 12 L 12 14 L 14 14 L 14 16 L 10 16 L 10 12 L 12 12 L 12 10 L 10 10 Z" fill="#FFD700" stroke="#DAA520" stroke-width="1"/>
        <path d="M 12 6 V 8" stroke="#FFD700" stroke-width="2" fill="none"/>
        <path d="M 10 4 L 14 4" stroke="#FFD700" stroke-width="2" fill="none"/>
      </svg>`
  },

  // Type Masteries
  "normal-master": {
    name: "Normal Norman",
    description: "Guess all Normal-type Pokémon from Gen 1.",
    pokemon: [16, 17, 18, 19, 20, 21, 22, 39, 40, 52, 53, 83, 84, 85, 108, 113, 115, 128, 132, 133, 137, 143],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#a8a878"/>
        <rect x="9" y="9" width="6" height="6" fill="#fff" stroke="#000" stroke-width="1"/>
      </svg>`
  },
  "poison-master": {
    name: "Toxic Tamer",
    description: "Guess all Poison-type Pokémon from Gen 1.",
    pokemon: [23, 24, 29, 30, 32, 33, 88, 89, 109, 110],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#a040a0"/>
        <path d="M 12 8 C 10 8 10 10 12 10 C 14 10 14 8 12 8 Z M 10 12 C 8 12 8 14 10 14 C 12 14 12 12 10 12 Z M 14 12 C 12 12 12 14 14 14 C 16 14 16 12 14 12 Z" fill="#fff"/>
      </svg>`
  },
  "water-master": {
    name: "Aqua Admiral",
    description: "Guess all Water-type Pokémon from Gen 1.",
    pokemon: [7, 8, 9, 54, 55, 60, 61, 62, 86, 90, 98, 99, 116, 117, 118, 119, 120, 121, 129, 134],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#6890f0"/>
        <path d="M 12 8 C 10 10 12 12 12 12 C 12 12 14 10 12 8 Z M 12 12 C 10 14 12 16 12 16 C 12 16 14 14 12 12 Z" fill="#fff"/>
      </svg>`
  },
  "grass-master": {
    name: "Garden Guardian",
    description: "Guess all Grass-type Pokémon from Gen 1.",
    pokemon: [1, 2, 3, 43, 44, 45, 69, 70, 71, 102, 103, 114],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#78c850"/>
        <path d="M 12 16 V 10 L 14 12 L 12 10 L 10 12 Z" fill="#fff"/>
      </svg>`
  },
  "bug-master": {
    name: "Bug Baron",
    description: "Guess all Bug-type Pokémon from Gen 1.",
    pokemon: [10, 11, 12, 13, 14, 15, 46, 47, 48, 49, 123, 127],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#a8b820"/>
        <circle cx="10" cy="10" r="1" fill="#fff"/><circle cx="14" cy="10" r="1" fill="#fff"/>
        <path d="M 9 14 L 15 14" stroke="#fff" stroke-width="1"/>
      </svg>`
  },
  "fire-master": {
    name: "Fiery Commander",
    description: "Guess all Fire-type Pokémon from Gen 1.",
    pokemon: [4, 5, 6, 37, 38, 58, 59, 77, 78, 126, 136, 146],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#f08030"/>
        <path d="M 12 10 C 10 12 12 14 12 16 C 14 14 12 12 12 10 Z" fill="#fff"/>
      </svg>`
  },
  "psychic-master": {
    name: "Psychic Prodigy",
    description: "Guess all Psychic-type Pokémon from Gen 1.",
    pokemon: [63, 64, 65, 79, 80, 96, 97, 122, 124, 150, 151],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#f85888"/>
        <path d="M 10 10 C 12 8 14 10 12 12 C 14 14 12 16 10 14" stroke="#fff" stroke-width="2" fill="none"/>
      </svg>`
  },
  "ground-master": {
    name: "Groundbreaker",
    description: "Guess all Ground-type Pokémon from Gen 1.",
    pokemon: [27, 28, 50, 51, 104, 105, 111, 112],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#e0c068"/>
        <path d="M 8 14 L 16 14 L 16 16 L 8 16 Z" fill="#fff"/>
      </svg>`
  },
  "rock-master": {
    name: "Rock Solid",
    description: "Guess all Rock-type Pokémon from Gen 1.",
    pokemon: [74, 75, 76, 95, 138, 139, 140, 141, 142],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#b8a038"/>
        <path d="M 10 10 L 14 10 L 14 14 L 10 14 Z" fill="#fff"/>
      </svg>`
  },
  "electric-master": {
    name: "Voltaic Virtuoso",
    description: "Guess all Electric-type Pokémon from Gen 1.",
    pokemon: [25, 26, 81, 82, 100, 101, 125, 135, 145],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#f8d030"/>
        <path d="M 12 8 L 10 12 L 14 12 L 12 16" stroke="#fff" stroke-width="2" fill="none"/>
      </svg>`
  },
  "fighting-master": {
    name: "Fighting Spirit",
    description: "Guess all Fighting-type Pokémon from Gen 1.",
    pokemon: [56, 57, 66, 67, 68, 106, 107],
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#c03028"/>
        <path d="M 9 10 L 11 10 L 11 14 L 9 14 Z M 13 10 L 15 10 L 15 14 L 13 14 Z" fill="#fff"/>
      </svg>`
  },

  // Speedrunner Achievements
  "speedrunner-50": {
    name: "Warp Speed",
    description: "Guess 50 Pokémon in under 5 minutes.",
    pokemon: [], // Custom logic
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#ADD8E6"/>
        <path d="M 12 6 V 12 L 16 16" stroke="#000" stroke-width="2" fill="none"/>
        <path d="M 10 4 L 14 4" stroke="#000" stroke-width="1"/>
      </svg>`
  },
  "speedrunner-100": {
    name: "Lightning Fast",
    description: "Guess 100 Pokémon in under 10 minutes.",
    pokemon: [], // Custom logic
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#FFD700"/>
        <path d="M 12 6 V 12 L 16 16" stroke="#000" stroke-width="2" fill="none"/>
        <path d="M 10 4 L 14 4" stroke="#000" stroke-width="1"/>
        <path d="M 8 8 L 6 10 M 16 8 L 18 10" stroke="#000" stroke-width="1"/>
      </svg>`
  },
  "speedrunner-151": {
    name: "Speedrunner",
    description: "Guess all 151 Pokémon in under 15 minutes.",
    pokemon: [], // Custom logic
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#FF4500" stroke-width="2" fill="#FFA500"/>
        <path d="M 12 6 V 12 L 16 16" stroke="#000" stroke-width="2" fill="none"/>
        <path d="M 10 4 L 14 4" stroke="#000" stroke-width="1"/>
        <path d="M 8 8 L 4 8 M 16 8 L 20 8" stroke="#000" stroke-width="2"/>
      </svg>`
  },

  // Economical with Hints Achievements
  "hints-10": {
    name: "Hint Savvy",
    description: "Guess all 151 Pokémon using 10 hints or less.",
    pokemon: [], // Custom logic
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#90EE90"/>
        <path d="M 12 8 L 12 16 M 10 10 L 14 14 M 10 14 L 14 10" stroke="#3CB371" stroke-width="2"/>
        <circle cx="12" cy="7" r="1" fill="#3CB371"/>
      </svg>`
  },
  "hints-5": {
    name: "Economical",
    description: "Guess all 151 Pokémon using 5 hints or less.",
    pokemon: [], // Custom logic
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#888" stroke-width="2" fill="#FFB6C1"/>
        <path d="M 12 8 L 12 16 M 10 10 L 14 14 M 10 14 L 14 10" stroke="#FF69B4" stroke-width="2"/>
        <circle cx="12" cy="7" r="1" fill="#FF69B4"/>
        <path d="M 9 6 L 15 6" stroke="#FF1493" stroke-width="1"/>
      </svg>`
  },
  "hints-0": {
    name: "Zero Hints!",
    description: "Guess all 151 Pokémon without using any hints.",
    pokemon: [], // Custom logic
    icon: `
      <svg viewBox="0 0 24 24" shape-rendering="crispEdges">
        <circle cx="12" cy="12" r="10" stroke="#FFD700" stroke-width="2" fill="#FFFF00"/>
        <path d="M 12 8 L 12 16 M 10 10 L 14 14 M 10 14 L 14 10" stroke="#DAA520" stroke-width="2"/>
        <circle cx="12" cy="7" r="1" fill="#DAA520"/>
        <path d="M 8 5 L 16 5" stroke="#B8860B" stroke-width="2"/>
      </svg>`
  }
};
