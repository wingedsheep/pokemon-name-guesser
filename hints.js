const pokemonHints = {
  1: [
    "It can go for days without eating a single morsel because the seed on its back stores energy.",
    "This Pokémon can be seen napping in bright sunlight, absorbing the sun's rays to make its seed grow.",
    "The strange seed on its back was planted at birth and grows with it."
  ],
  2: [
    "When the bulb on its back grows large, it loses the ability to stand on its hind legs.",
    "The bud on its back is said to absorb nutrients and swell into a large flower.",
    "A sweet aroma wafts from the bud on its back, which grows stronger just before it blooms."
  ],
  3: [
    "The plant on its back blooms when it is absorbing solar energy, filling the air with a soothing scent.",
    "It is said that the flower's fragrance intensifies after a rainy day.",
    "This Pokémon uses its large petals to absorb sunlight for energy."
  ],
  4: [
    "The flame on its tail indicates its life force. If it's weak, the flame also burns weakly.",
    "This Pokémon prefers warm places and the flame on its tail has burned continuously since its birth.",
    "If the flame on its tail goes out, it will die."
  ],
  5: [
    "In the wild, this Pokémon is known for its vicious nature and constantly seeks out opponents.",
    "It is known to have a fiery temper, and its tail flame burns hotter when it's excited.",
    "It uses its sharp claws to mercilessly slash its foes."
  ],
  6: [
    "Its fiery breath is hot enough to melt boulders and can cause forest fires.",
    "It flies in search of powerful opponents and its fire burns hotter when it wins a tough battle.",
    "Despite having wings, it is a Fire/Flying type, not a Dragon type."
  ],
  7: [
    "It withdraws its long neck into its shell to spray powerful water jets.",
    "The shell on its back isn't just for protection; its rounded shape helps reduce water resistance.",
    "After birth, its back swells and hardens into a shell."
  ],
  8: [
    "This Pokémon is often seen as a symbol of longevity and good luck.",
    "It has a long, furry tail that is said to change color as it ages.",
    "It hides in the water to stalk its prey and can swim at high speeds."
  ],
  9: [
    "The powerful water jets from the cannons on its shell can punch through thick steel.",
    "It is deliberately heavy to withstand the recoil of its own powerful water jets.",
    "The jets of water it spouts from the rocket cannons on its shell can blast through concrete."
  ],
  10: [
    "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
    "If you touch the feeler on top of its head, it will release a horrible stink to protect itself.",
    "It has a voracious appetite and can eat leaves bigger than itself."
  ],
  11: [
    "This Pokémon is in a transitional stage, its soft body protected by a hard shell.",
    "Although it is encased in a sturdy shell, its insides are soft and vulnerable.",
    "It remains mostly immobile to conserve energy for its upcoming evolution."
  ],
  12: [
    "It releases a toxic dust from its wings that can be lethal.",
    "It has large, compound eyes that can see in all directions.",
    "It loves the honey of flowers and can locate flower patches with its keen sense of smell."
  ],
  13: [
    "It has a sharp, venomous stinger on its head that it uses for defense.",
    "This Pokémon is often found in forests and wooded areas, eating leaves.",
    "It has an incredibly acute sense of smell."
  ],
  14: [
    "This Pokémon is the middle stage of a three-stage evolution, mostly immobile inside its shell.",
    "Its shell is as hard as steel, protecting it from predators.",
    "It may not be able to move much, but it can extend its stinger to attack."
  ],
  15: [
    "It has three venomous stingers: two on its forelimbs and one on its tail.",
    "They fly at high speeds and attack in swarms, using their powerful stingers to overwhelm foes.",
    "This Pokémon is extremely territorial and will attack anyone who approaches its nest."
  ],
  16: [
    "This small, common bird Pokémon is very docile and prefers to avoid conflict.",
    "It flaps its wings at high speeds to kick up blinding sand.",
    "It can be found in forests and grasslands, often in large flocks."
  ],
  17: [
    "This Pokémon is known for its keen eyesight and can spot prey from a mile high.",
    "It has a large territory and will patrol it vigilantly.",
    "It has a distinctive crest of red feathers on its head."
  ],
  18: [
    "It is the final evolution of a common bird Pokémon and is known for its incredible speed.",
    "This Pokémon can fly at Mach 2 speed at an altitude of 3,300 feet.",
    "Its glossy feathers are so beautiful that they have captivated many trainers."
  ],
  19: [
    "This small, rodent-like Pokémon is cautious in the extreme.",
    "Its sharp fangs grow continuously, so it must gnaw on hard things to keep them in check.",
    "It is a common sight in grassy fields and can live anywhere."
  ],
  20: [
    "Its fangs are strong enough to gnaw through concrete walls and even topple houses.",
    "Its webbed hind feet allow it to swim across rivers.",
    "It uses its long whiskers to maintain its balance."
  ],
  21: [
    "This bird Pokémon has a very loud cry that can be heard over half a mile away.",
    "It has to flap its short wings at high speed to stay airborne.",
    "It is a Normal/Flying-type Pokémon, often found in fields and mountains."
  ],
  22: [
    "This Pokémon is the evolved form of a common bird Pokémon.",
    "It has a long, sharp beak that it uses to pluck out prey from the ground.",
    "It can fly for an entire day without needing to rest."
  ],
  23: [
    "This serpentine Pokémon moves silently and stealthily.",
    "It can unhinge its jaw to swallow prey larger than itself whole.",
    "It is a Poison-type Pokémon that wraps around and constricts its prey."
  ],
  24: [
    "The pattern on its belly is said to be a face that can intimidate foes.",
    "The patterns on its hood can differ from region to region.",
    "It is a large, intimidating Poison-type Pokémon that is extremely territorial."
  ],
  25: [
    "This Electric-type Pokémon is the mascot of the Pokémon franchise.",
    "It stores electricity in the pouches on its cheeks.",
    "When several of these Pokémon gather, their electricity can build and cause lightning storms."
  ],
  26: [
    "Its long tail serves as a ground to protect it from its own high-voltage power.",
    "It can store over 100,000 volts of electricity, and its ears glow when it's fully charged.",
    "Careless contact can cause even an Indian elephant to faint."
  ],
  27: [
    "This Ground-type Pokémon has a skin that is tough and dry.",
    "It can curl up into a spiny ball to protect itself from predators.",
    "It burrows underground to hunt for food and to escape the desert heat."
  ],
  28: [
    "This Pokémon is the evolved form of a Ground-type Pokémon.",
    "The spikes on its back are made of hardened sand and will grow back if they break off.",
    "It curls up into a spiny ball and rolls into its foes at high speeds."
  ],
  29: [
    "This small, quadrupedal Pokémon is the female of its species.",
    "Although small, its venomous barbs are highly toxic.",
    "It is a Poison-type Pokémon that is known for its gentle nature."
  ],
  30: [
    "When it is with its friends or family, its barbs are said to be retracted to prevent injury.",
    "It has a gentle nature, but it will become fierce if it thinks its young are in danger.",
    "It is a Poison-type Pokémon and is known for its strong maternal instincts."
  ],
  31: [
    "This large, bipedal Pokémon is the final evolution of the female of its species.",
    "Its body is covered in needle-like scales that are as hard as steel.",
    "It is a dual-type Poison/Ground Pokémon and is a very protective mother."
  ],
  32: [
    "This small, quadrupedal Pokémon is the male of its species.",
    "Its large ears are constantly moving to listen for signs of danger.",
    "It is a Poison-type Pokémon and is known for its aggressive nature."
  ],
  33: [
    "This Pokémon is the evolved form of the male of its species.",
    "It has a violent temper and will jab its horn into foes.",
    "It is a Poison-type Pokémon that is quick to anger."
  ],
  34: [
    "This large, bipedal Pokémon is the final evolution of the male of its species.",
    "Its powerful tail can topple a metal transmission tower with one swing.",
    "It is a dual-type Poison/Ground Pokémon and is known for its immense power."
  ],
  35: [
    "This Fairy-type Pokémon is known for its cute appearance and magical abilities.",
    "It is said to be more active during the full moon and can be seen dancing in groups.",
    "The light-gathering wings on its back allow it to float."
  ],
  36: [
    "This Pokémon is the evolved form of a shy, Fairy-type Pokémon.",
    "It is extremely rare and is said to bring happiness to those who see it.",
    "Its hearing is so acute it can hear a pin drop from a half a mile away."
  ],
  37: [
    "This Fire-type Pokémon is known for its beauty and intelligence.",
    "It is born with six tails that grow more beautiful and furrier as it ages.",
    "Inside its body burns a flame that never goes out."
  ],
  38: [
    "This elegant Fire-type Pokémon has nine long, golden tails.",
    "It is said to be able to live for 1,000 years and has mystical powers.",
    "Each of its nine tails is said to hold a different mystical power."
  ],
  39: [
    "This Normal/Fairy-type Pokémon is known for its enchanting singing voice.",
    "Its vocal cords can freely adjust the wavelength of its voice, allowing it to sing a lullaby that will make anyone fall asleep.",
    "It has a round, pink body and can inflate itself like a balloon."
  ],
  40: [
    "This Pokémon is the evolved form of a singing, Normal/Fairy-type Pokémon.",
    "Its body is covered in a fine, soft fur that is a delight to touch.",
    "It is known for its large, rabbit-like ears and its powerful singing voice."
  ],
  41: [
    "This bat-like Pokémon emits ultrasonic waves from its mouth to check its surroundings.",
    "It lives in caves and other dark places, and it comes out at night to hunt for insects.",
    "It is a dual-type Poison/Flying Pokémon."
  ],
  42: [
    "This Pokémon is the evolved form of a bat-like Pokémon.",
    "It has a voracious appetite for blood and can drink more than 10 ounces in one sitting.",
    "Even after it has drunk a bellyful of blood, it will often share with others in its colony."
  ],
  43: [
    "This small, nocturnal Pokémon grows by bathing in moonlight.",
    "It is a dual-type Grass/Poison Pokémon that is often found in temperate forests.",
    "During the day, it buries itself in the ground to avoid the sun, leaving only its leaves exposed."
  ],
  44: [
    "The fluid that oozes from its mouth is a sticky honey, but it has a horribly foul odor.",
    "It is the evolved form of a small, plant-like Pokémon.",
    "The foul odor it emits can be so strong that it can make people faint from a mile away."
  ],
  45: [
    "This Pokémon is the final evolution of a small, plant-like Pokémon.",
    "The petals on its head are the largest in the world and are laden with toxic pollen.",
    "The more toxic its pollen, the more vividly colored its petals become."
  ],
  46: [
    "This insect-like Pokémon has a parasitic mushroom growing on its back.",
    "The mushroom on its back is a tochukaso, a type of fungus that is highly valued as a medicine.",
    "It is a dual-type Bug/Grass Pokémon that lives in damp forests."
  ],
  47: [
    "The parasitic mushroom on its back has grown larger than the host, controlling its actions.",
    "It is the evolved form of an insect-like Pokémon.",
    "It is known to inhabit dark, damp places and drains nutrients from the roots of trees."
  ],
  48: [
    "This small, insect-like Pokémon has large, compound eyes that act as radar.",
    "It is a dual-type Bug/Poison Pokémon that is active at night.",
    "Its entire body is covered in a fine, stiff fur."
  ],
  49: [
    "The dust-like scales on its wings are toxic and can cause paralysis.",
    "It is the evolved form of a small, insect-like Pokémon.",
    "It is attracted to bright lights at night and can be seen fluttering around streetlights."
  ],
  50: [
    "This Ground-type Pokémon burrows through the earth at high speeds.",
    "It is a small, mole-like Pokémon with a pink nose.",
    "It spends most of its life underground, and its skin is very thin."
  ],
  51: [
    "This Pokémon is the evolved form of a Ground-type Pokémon.",
    "It is a trio of Diglett that work together as one.",
    "They are capable of digging at depths of up to 60 miles."
  ],
  52: [
    "This feline Pokémon is known for its love of shiny, round objects.",
    "It has a gold coin on its forehead that it is very protective of.",
    "It is a Normal-type Pokémon that is often found in urban areas."
  ],
  53: [
    "This Pokémon is the evolved form of a feline Pokémon.",
    "It has a sleek, elegant appearance and a haughty demeanor.",
    "It is a Normal-type Pokémon with a red jewel on its forehead."
  ],
  54: [
    "This Water-type Pokémon is always suffering from a chronic headache.",
    "It has a vacant, dazed expression, but sometimes it will display a mysterious power.",
    "When its headache becomes severe, it can unleash powerful psychic abilities."
  ],
  55: [
    "This Pokémon is the evolved form of a Water-type Pokémon.",
    "It is a graceful swimmer and can easily outpace a human champion.",
    "The gem on its forehead glows when it uses its psychic powers."
  ],
  56: [
    "This Fighting-type Pokémon is known for its wild and energetic nature.",
    "It has a pig-like nose and a long, prehensile tail.",
    "It is quick to anger and will fly into a rage if it doesn't get its way."
  ],
  57: [
    "This Pokémon is the evolved form of a Fighting-type Pokémon.",
    "It is known for its ferocious and uncontrollable rage.",
    "Once it becomes enraged, it will not stop chasing its target until it is defeated."
  ],
  58: [
    "This Fire-type Pokémon is known for its brave and loyal nature.",
    "It has a superb sense of smell and will bark at anything it finds unfamiliar.",
    "It is a popular choice for police officers and security guards."
  ],
  59: [
    "This Pokémon is the evolved form of a Fire-type Pokémon.",
    "It is known for its incredible speed, which is said to be like the wind.",
    "It is a majestic Pokémon that has been depicted in ancient Chinese scrolls."
  ],
  60: [
    "This Water-type Pokémon has a distinctive spiral pattern on its belly.",
    "It has just grown legs and is not yet a very good swimmer.",
    "It is the first stage of a three-stage evolution."
  ],
  61: [
    "This Pokémon is the middle stage of a three-stage evolution.",
    "The spiral on its belly is its internal organs showing through its skin.",
    "It can live on both land and in water, and its skin is always moist."
  ],
  62: [
    "This Pokémon is the final evolution of a Water-type Pokémon.",
    "It is a powerful swimmer and has well-developed muscles in its arms and legs.",
    "It is a dual-type Water/Fighting Pokémon."
  ],
  63: [
    "This Psychic-type Pokémon can teleport at will.",
    "It can sense danger and will teleport to safety before an attack hits.",
    "It sleeps for 18 hours a day, but even when it is sleeping, it can use its psychic powers."
  ],
  64: [
    "This Pokémon is the evolved form of a Psychic-type Pokémon.",
    "It carries a silver spoon that amplifies its psychic abilities.",
    "It is said that a spoonful of its psychic energy can cure any illness."
  ],
  65: [
    "This Pokémon is the final evolution of a Psychic-type Pokémon.",
    "It has an IQ of over 5,000 and can remember everything that has ever happened to it.",
    "It can outperform a supercomputer with its incredible brainpower."
  ],
  66: [
    "This Fighting-type Pokémon has a body that is all muscle.",
    "It is small in stature but has the power to hurl a hundred grown-ups.",
    "It is the first stage of a three-stage evolution."
  ],
  67: [
    "This Pokémon is the middle stage of a three-stage evolution.",
    "It wears a power-save belt to keep its incredible strength under control.",
    "It is a very dedicated Pokémon that loves to train and build its muscles."
  ],
  68: [
    "This Pokémon is the final evolution of a Fighting-type Pokémon.",
    "It has four arms and can deliver 1,000 punches in just two seconds.",
    "It is a master of every martial art in the world."
  ],
  69: [
    "This plant-like Pokémon has a long, flexible body like a vine.",
    "It is a dual-type Grass/Poison Pokémon.",
    "It can spit a fluid that melts anything it touches."
  ],
  70: [
    "This Pokémon is the evolved form of a plant-like Pokémon.",
    "It has a large, bell-shaped mouth and sharp, leaf-like cutters.",
    "It can swallow prey whole, no matter how large."
  ],
  71: [
    "This Pokémon is the final evolution of a plant-like Pokémon.",
    "It has a large, pitcher-shaped body that is filled with a corrosive fluid.",
    "It lures prey with a sweet scent and then dissolves them in its body."
  ],
  72: [
    "This jellyfish-like Pokémon is composed of 99% water.",
    "It is a dual-type Water/Poison Pokémon.",
    "Its two long tentacles are tipped with a potent venom."
  ],
  73: [
    "This Pokémon is the evolved form of a jellyfish-like Pokémon.",
    "It has 80 tentacles that it can use to create a poisonous net.",
    "The red orbs on its head can glow brightly, and it is known as the 'gangster of the sea'."
  ],
  74: [
    "This Pokémon is a living rock with arms.",
    "It is a dual-type Rock/Ground Pokémon.",
    "It is often found in mountainous regions, and it can be mistaken for a boulder when it is sleeping."
  ],
  75: [
    "This Pokémon is the evolved form of a living rock Pokémon.",
    "It has a rugged, boulder-like body and two powerful arms.",
    "It is known to cause landslides when it rolls down mountains."
  ],
  76: [
    "This Pokémon is the final evolution of a living rock Pokémon.",
    "It has a massive, rocky body that is as hard as diamond.",
    "It can withdraw its head, arms, and legs into its shell to protect itself from explosions."
  ],
  77: [
    "This Fire-type Pokémon has a fiery mane and tail.",
    "It is known for its incredible speed and can run at up to 150 mph.",
    "It is born with a weak back, but it becomes stronger as it runs and plays."
  ],
  78: [
    "This Pokémon is the evolved form of a Fire-type Pokémon.",
    "It has a single, large horn on its forehead that is said to be as hard as diamond.",
    "It is a very proud and competitive Pokémon that loves to race."
  ],
  79: [
    "This dual-type Water/Psychic Pokémon is known for its slow, dopey nature.",
    "It is so slow-witted that it takes 5 seconds for it to feel pain when it is attacked.",
    "It has a long, pink tail that it uses to lure in prey."
  ],
  80: [
    "This Pokémon is the evolved form of a dual-type Water/Psychic Pokémon.",
    "It has a Shellder clamped onto its tail, which has given it a boost in intelligence.",
    "It is a very intelligent Pokémon that can come up with clever strategies in battle."
  ],
  81: [
    "This Pokémon is a living magnet with a single eye.",
    "It is a dual-type Electric/Steel Pokémon.",
    "It can float in the air by emitting an anti-gravity force."
  ],
  82: [
    "This Pokémon is the evolved form of a living magnet Pokémon.",
    "It is composed of three Magnemite that are linked together by a powerful magnetic force.",
    "It can emit a magnetic field that is powerful enough to disrupt radio waves."
  ],
  83: [
    "This Normal/Flying-type Pokémon is always seen carrying a leek stalk.",
    "It uses its leek as a weapon, a nest-building material, and an emergency food source.",
    "It is a very proud Pokémon and will not eat anything but its leek."
  ],
  84: [
    "This two-headed bird Pokémon is a Normal/Flying-type.",
    "Its two heads have separate brains and are always in agreement.",
    "It is a fast runner and can reach speeds of up to 60 mph."
  ],
  85: [
    "This Pokémon is the evolved form of a two-headed bird Pokémon.",
    "It has three heads that represent joy, sadness, and anger.",
    "When its three heads are in agreement, it can run at its full speed."
  ],
  86: [
    "This Water-type Pokémon is a sea lion-like creature.",
    "It has a small horn on its forehead and a white, furry coat.",
    "It is often found in cold, icy waters, and it loves to play in the snow."
  ],
  87: [
    "This Pokémon is the evolved form of a sea lion-like Pokémon.",
    "It is a dual-type Water/Ice Pokémon.",
    "It is a graceful swimmer and can move through the water with ease."
  ],
  88: [
    "This Poison-type Pokémon is a living pile of sludge.",
    "It is born from sludge that has been exposed to the moon's X-rays.",
    "It has a foul odor that can cause people to faint."
  ],
  89: [
    "This Pokémon is the evolved form of a living pile of sludge.",
    "It is a large, amorphous Pokémon made of toxic sludge.",
    "It is so toxic that it can poison the ground it touches."
  ],
  90: [
    "This Water-type Pokémon is a bivalve with a hard shell.",
    "It has a single, large eye and a long tongue that it uses to lure in prey.",
    "It is often found clamped onto the tails of Slowpoke."
  ],
  91: [
    "This Pokémon is the evolved form of a bivalve Pokémon.",
    "It is a dual-type Water/Ice Pokémon.",
    "Its shell is so hard that it can withstand a bomb blast."
  ],
  92: [
    "This dual-type Ghost/Poison Pokémon is a gaseous entity.",
    "It is made of a toxic gas and can be found in graveyards and old, abandoned buildings.",
    "It can knock out an Indian elephant with a single whiff of its gas."
  ],
  93: [
    "This Pokémon is the evolved form of a gaseous Pokémon.",
    "It has a mischievous nature and loves to play pranks on people.",
    "It can lick its victims with its gaseous tongue, causing them to shiver until they die."
  ],
  94: [
    "This Pokémon is the final evolution of a gaseous Pokémon.",
    "It is a dual-type Ghost/Poison Pokémon.",
    "It is said to steal the life force of its victims by hiding in their shadows."
  ],
  95: [
    "This large, snake-like Pokémon is made of rocks.",
    "It is a dual-type Rock/Ground Pokémon.",
    "It can burrow through the ground at a speed of 50 mph."
  ],
  96: [
    "This Psychic-type Pokémon is known for its ability to eat dreams.",
    "It has a long, trunk-like nose and a drowsy, sleepy appearance.",
    "It can tell what kind of dream you are having by the way you are sleeping."
  ],
  97: [
    "This Pokémon is the evolved form of a dream-eating Pokémon.",
    "It carries a pendulum that it uses to hypnotize its victims into a deep sleep.",
    "It is a powerful Psychic-type Pokémon with a sinister and unsettling nature."
  ],
  98: [
    "This Water-type Pokémon is a crab-like creature.",
    "It has a large, powerful pincer that it uses to defend itself.",
    "It is often found on beaches and can be seen blowing bubbles from its mouth."
  ],
  99: [
    "This Pokémon is the evolved form of a crab-like Pokémon.",
    "It has one massive pincer that is said to have a power of 10,000 horsepower.",
    "It can crush anything it gets a hold of with its powerful pincer."
  ],
  100: [
    "This Electric-type Pokémon resembles a Poké Ball.",
    "It is known for its tendency to explode at the slightest provocation.",
    "It is often mistaken for an item, leading to a shocking surprise for anyone who tries to pick it up."
  ],
  101: [
    "This Pokémon is the evolved form of a Poké Ball-like Pokémon.",
    "It is a large, round Pokémon with a blank, expressionless face.",
    "It is known for its incredible speed and has been clocked at over 60 mph."
  ],
  102: [
    "This dual-type Grass/Psychic Pokémon is a cluster of six eggs.",
    "Each of the six eggs has its own face and personality.",
    "They are very close to one another and will spin around when they are happy."
  ],
  103: [
    "This Pokémon is the evolved form of a cluster of eggs.",
    "It is a tall, palm tree-like Pokémon with three heads.",
    "Each of its three heads has its own thoughts and feelings."
  ],
  104: [
    "This Ground-type Pokémon wears the skull of its deceased mother as a helmet.",
    "It is a lonely and sorrowful Pokémon, and its cries echo in the skull it wears.",
    "It uses a bone as a weapon, and it is a skilled fighter."
  ],
  105: [
    "This Pokémon is the evolved form of a lonely, Ground-type Pokémon.",
    "It has overcome its sadness and has become a strong and fierce warrior.",
    "It is a master of bone-wielding combat and can throw its bone boomerang with great accuracy."
  ],
  106: [
    "This Fighting-type Pokémon is known for its incredible kicking ability.",
    "Its legs can stretch to twice their normal length, allowing it to strike from a distance.",
    "It is a master of all forms of kicking martial arts."
  ],
  107: [
    "This Fighting-type Pokémon is known for its incredible punching speed.",
    "It can throw punches that are faster than a speeding bullet.",
    "It is said to have the spirit of a professional boxer."
  ],
  108: [
    "This Normal-type Pokémon has a long, prehensile tongue.",
    "Its tongue is twice as long as its body and is covered in a sticky saliva.",
    "It uses its long tongue to clean itself and to catch prey."
  ],
  109: [
    "This Poison-type Pokémon is a floating, spherical creature.",
    "It is filled with a toxic gas that can cause severe coughing and sneezing.",
    "It is often found in urban areas and is a sign of pollution."
  ],
  110: [
    "This Pokémon is the evolved form of a floating, spherical Pokémon.",
    "It is composed of two Koffing that have merged together.",
    "It can release a powerful stream of toxic gas from both of its mouths."
  ],
  111: [
    "This dual-type Rock/Ground Pokémon has a thick, armored hide.",
    "It is a very stubborn and hard-headed Pokémon.",
    "It will charge at anything that moves, but it is not very good at turning."
  ],
  112: [
    "This Pokémon is the evolved form of a Rock/Ground Pokémon.",
    "It is a powerful and destructive Pokémon with a drill-like horn.",
    "It is said that its horn can shatter diamonds."
  ],
  113: [
    "This Normal-type Pokémon is known for its caring and compassionate nature.",
    "It carries a lucky egg in its pouch, which is said to bring happiness to anyone who eats it.",
    "It is a very rare Pokémon that is said to bring good luck to anyone who catches it."
  ],
  114: [
    "This Grass-type Pokémon is covered in a thick tangle of blue vines.",
    "Its true form is a mystery, as it is always hidden beneath its vines.",
    "The vines can be broken off without causing any harm to the Pokémon, and they will grow back in a day."
  ],
  115: [
    "This Normal-type Pokémon is a large, bipedal creature.",
    "It carries its young in a pouch on its belly.",
    "It is a very protective parent and will not hesitate to attack anyone who threatens its child."
  ],
  116: [
    "This Water-type Pokémon is a small, seahorse-like creature.",
    "It can shoot a precise jet of ink from its mouth to blind its opponents.",
    "It is the first stage of a two-stage evolution."
  ],
  117: [
    "This Pokémon is the evolved form of a seahorse-like Pokémon.",
    "It has a powerful, whip-like tail that it uses to create whirlpools.",
    "The fins on its back are tipped with a venomous poison that can cause fainting."
  ],
  118: [
    "This Water-type Pokémon is a graceful, goldfish-like creature.",
    "It has a sharp horn on its forehead that it uses to defend itself.",
    "It is known for its beautiful, flowing fins, which are said to be a sign of good luck."
  ],
  119: [
    "This Pokémon is the evolved form of a goldfish-like Pokémon.",
    "It is a powerful and majestic Pokémon with a large, drill-like horn.",
    "It is known to be very territorial and will use its horn to bore holes in riverbed boulders to create its nest."
  ],
  120: [
    "This Water-type Pokémon is a star-shaped creature.",
    "It has a red gem in the center of its body that glows in a rainbow of colors at night.",
    "It can regenerate any of its limbs as long as the central core is intact."
  ],
  121: [
    "This Pokémon is the evolved form of a star-shaped Pokémon.",
    "It is a dual-type Water/Psychic Pokémon.",
    "The gem in the center of its body is said to be a source of immense psychic power, and it is believed to be from outer space."
  ],
  122: [
    "This dual-type Psychic/Fairy Pokémon is a master of pantomime.",
    "It can create invisible walls and objects with its psychic powers.",
    "It is a very skilled mimic and can imitate the actions of its opponents."
  ],
  123: [
    "This dual-type Bug/Flying Pokémon is a mantis-like creature.",
    "It has two large, sharp scythes for arms that it can use to slice through its opponents.",
    "It can move so quickly that it can create the illusion of being in multiple places at once."
  ],
  124: [
    "This dual-type Ice/Psychic Pokémon is a humanoid creature.",
    "It has a unique and melodic crying voice that sounds like human speech.",
    "It can communicate with humans through a form of telepathy."
  ],
  125: [
    "This Electric-type Pokémon is a humanoid creature with a striped pattern.",
    "It can absorb electricity from power plants and cause massive blackouts.",
    "It is known for its powerful electric attacks, which it unleashes with a flurry of punches."
  ],
  126: [
    "This Fire-type Pokémon is a humanoid creature with a duck-like beak.",
    "It lives in volcanic craters and can withstand temperatures of up to 2,200 degrees Fahrenheit.",
    "It can breathe fire that is hot enough to melt solid rock."
  ],
  127: [
    "This Bug-type Pokémon is a large, stag beetle-like creature.",
    "It has two powerful pincers on its head that it uses to crush its opponents.",
    "It is known for its incredible strength and can lift objects that weigh up to twice its own weight."
  ],
  128: [
    "This Normal-type Pokémon is a bull-like creature.",
    "It is known for its wild and aggressive nature.",
    "It will charge at anything that moves, and it is very difficult to tame."
  ],
  129: [
    "This Water-type Pokémon is known for being the weakest and most pathetic of all Pokémon.",
    "It is a feeble creature that can do little more than splash around.",
    "However, it is said to have the potential to evolve into a very powerful Pokémon."
  ],
  130: [
    "This Pokémon is the evolved form of a weak and pathetic Pokémon.",
    "It is a large, serpentine sea dragon that is known for its destructive rage.",
    "It is a dual-type Water/Flying Pokémon that is said to be able to destroy entire cities in a fit of rage."
  ],
  131: [
    "This dual-type Water/Ice Pokémon is a gentle and intelligent creature.",
    "It is a large, sea-dwelling Pokémon with a shell on its back.",
    "It is known for its beautiful singing voice and its ability to understand human speech, and it loves to ferry people across the sea."
  ],
  132: [
    "This Normal-type Pokémon has the ability to transform into any other Pokémon.",
    "It can rearrange its cellular structure to mimic the appearance and abilities of its opponent.",
    "It is a very versatile and unpredictable Pokémon, and it is said to be able to breed with any Pokémon."
  ],
  133: [
    "This Normal-type Pokémon has an unstable genetic code.",
    "It has the potential to evolve into many different forms, depending on its environment and the stones it is exposed to.",
    "It is a very popular Pokémon due to its cute appearance and its many evolutionary possibilities."
  ],
  134: [
    "This Pokémon is one of the possible evolutions of a Normal-type Pokémon.",
    "It is a Water-type Pokémon with a sleek, fish-like body.",
    "It has the ability to melt into water and become invisible."
  ],
  135: [
    "This Pokémon is one of the possible evolutions of a Normal-type Pokémon.",
    "It is an Electric-type Pokémon with a spiky, yellow coat.",
    "It can generate and store a large amount of electricity in its body, and it can fire off electrified needles."
  ],
  136: [
    "This Pokémon is one of the possible evolutions of a Normal-type Pokémon.",
    "It is a Fire-type Pokémon with a fluffy, orange coat.",
    "It has an internal flame sac that can reach temperatures of up to 3,000 degrees Fahrenheit, and it can breathe fire."
  ],
  137: [
    "This Normal-type Pokémon is a man-made, virtual Pokémon.",
    "It is composed of programming code and can move freely in cyberspace.",
    "It is the first and only Pokémon to be created by humans, and it is protected by a copy-protection code."
  ],
  138: [
    "This dual-type Rock/Water Pokémon is an ancient, fossilized creature.",
    "It has a spiral shell and numerous tentacles.",
    "It was resurrected from a fossil and is now able to live in the modern world, where it is often studied by scientists."
  ],
  139: [
    "This Pokémon is the evolved form of an ancient, fossilized Pokémon.",
    "It has a large, spiral shell and sharp, beak-like jaws.",
    "It is a powerful predator that can crush its prey with its strong jaws, and its tentacles can be used to ensnare its victims."
  ],
  140: [
    "This dual-type Rock/Water Pokémon is another ancient, fossilized creature.",
    "It has a hard, dome-shaped shell and two large, black eyes.",
    "It was resurrected from a fossil and is now able to live in the modern world, where it is known for its sharp claws."
  ],
  141: [
    "This Pokémon is the evolved form of an ancient, fossilized Pokémon.",
    "It has a sleek, armored body and two large, sharp scythes for arms.",
    "It is a swift and deadly hunter that can slice through its prey with ease, and it is said to have been one of the top predators of the ancient seas."
  ],
  142: [
    "This dual-type Rock/Flying Pokémon is an ancient, prehistoric creature.",
    "It was resurrected from a piece of amber and is now able to live in the modern world.",
    "It is a ferocious predator with sharp, serrated teeth and a powerful, winged body, and it is known for its supersonic screech."
  ],
  143: [
    "This Normal-type Pokémon is a large, bipedal creature.",
    "It is known for its incredible appetite and its love of sleeping.",
    "It can eat its own weight in food every day, and it is not a picky eater, as it will eat even moldy and rotten food."
  ],
  144: [
    "This legendary bird Pokémon is a dual-type Ice/Flying Pokémon.",
    "It is said to be the embodiment of winter, and it can create blizzards by flapping its wings.",
    "It is one of the three legendary birds of the Kanto region, and it is said to appear to doomed people who are lost in icy mountains."
  ],
  145: [
    "This legendary bird Pokémon is a dual-type Electric/Flying Pokémon.",
    "It is said to be the embodiment of thunderstorms, and it can create lightning by flapping its wings.",
    "It is one of the three legendary birds of the Kanto region, and it is said to live in thunderclouds."
  ],
  146: [
    "This legendary bird Pokémon is a dual-type Fire/Flying Pokémon.",
    "It is said to be the embodiment of summer, and it can create fire by flapping its wings.",
    "It is one of the three legendary birds of the Kanto region, and it is said to bring an early spring to the land it visits."
  ],
  147: [
    "This Dragon-type Pokémon is a serpentine creature.",
    "It is a rare and elusive Pokémon that is said to live in the depths of the ocean.",
    "It is the first stage of a three-stage evolution, and it is known for shedding its skin as it grows."
  ],
  148: [
    "This Pokémon is the evolved form of a serpentine, Dragon-type Pokémon.",
    "It has a long, slender body and a pair of small wings on its head.",
    "It is said to be able to control the weather, and it is known for its beautiful, crystalline orbs."
  ],
  149: [
    "This Pokémon is the final evolution of a serpentine, Dragon-type Pokémon.",
    "It is a kind and gentle Pokémon with a large, friendly face.",
    "It is said to be able to fly faster than the speed of sound, and it is known for its intelligence and its ability to understand human speech."
  ],
  150: [
    "This legendary Psychic-type Pokémon is a genetically engineered creature.",
    "It was created by a team of scientists who were trying to clone the mythical Pokémon, Mew.",
    "It is one of the most powerful and intelligent Pokémon in existence, and it is said to have the most savage heart among all Pokémon."
  ],
  151: [
    "This mythical Psychic-type Pokémon is said to be the ancestor of all Pokémon.",
    "It is a small, pink Pokémon with a long, thin tail.",
    "It is said to possess the genetic code of all Pokémon, and it can learn any move, and it is said to be able to make itself invisible at will."
  ]
};