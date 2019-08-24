const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sortBy = urlParams.get('sortBy');
const filterBy = urlParams.get('filterBy');
const extended = urlParams.get('extended');
const show = urlParams.get('show');

class CharacterNode {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
}

var characterNodeList = [];


let characterIndex = 0;
var characterInfo = [{
    id: ++characterIndex,
    name: 'Cycle Dog',
    imageUrl: './img/character/cycle.png',
    power: 650000
}, {
    id: ++characterIndex,
    name: 'Zero Redpanda',
    imageUrl: './img/character/zero.png',
    power: 620000
}, {
    id: ++characterIndex,
    name: 'Lighter Fennec (Tox)',
    imageUrl: './img/character/lighter.png',
    power: 680000
}, {
    id: ++characterIndex,
    name: 'King Q.Arthur',
    imageUrl: './img/character/arthur.png',
    power: 1200000
}, {
    id: ++characterIndex,
    name: 'Sakaji Orca',
    imageUrl: './img/character/sakaji.png',
    power: 348500
}, {
    id: ++characterIndex,
    name: 'Neon Ferret',
    imageUrl: './img/character/neon.png',
    power: 414000
}, {
    id: ++characterIndex,
    name: 'Mito Fox',
    imageUrl: './img/character/mito.png',
    power: 2200000
}, {
    id: ++characterIndex,
    name: 'Ray Tortoise',
    imageUrl: './img/character/ray.png',
    power: 375000
}, {
    id: ++characterIndex,
    name: 'Bruno Fox',
    imageUrl: './img/character/bruno.png',
    power: 161500
}, {
    id: ++characterIndex,
    name: 'Sune Monkey',
    imageUrl: './img/character/sune.png',
    power: 160450
}, {
    id: ++characterIndex,
    name: 'Magma Lion',
    imageUrl: './img/character/039.png',
    power: 167000
}, {
    id: ++characterIndex,
    name: 'Undead Seal',
    imageUrl: './img/character/072.png',
    power: 118000
}, {
    id: ++characterIndex,
    name: 'Champion Rabbit',
    imageUrl: './img/character/045.png',
    power: 190000
}, {
    id: ++characterIndex,
    name: 'Pure Otter',
    imageUrl: './img/character/120.png',
    power: 900000
}, {
    id: ++characterIndex,
    name: 'Chelonia Tortoise',
    imageUrl: './img/character/015.png',
    power: 620000
}, {
    id: ++characterIndex,
    name: 'Saito Dog',
    imageUrl: './img/character/014.png',
    power: 310000
}, {
    id: ++characterIndex,
    name: 'Gelix Raccoon',
    imageUrl: './img/character/117.png',
    power: 1800000
}, {
    id: ++characterIndex,
    name: 'Envy Dragon',
    imageUrl: './img/character/132.png',
    power: 1228000
}, {
    id: ++characterIndex,
    name: 'Shadowman Dog',
    imageUrl: './img/character/130.png',
    power: 440000
}, {
    id: ++characterIndex,
    name: 'Luna Chick',
    imageUrl: './img/character/129.png',
    power: 415000
}, {
    id: ++characterIndex,
    name: 'Sloth Goat',
    imageUrl: './img/character/121.png',
    power: 629000
}, {
    id: ++characterIndex,
    name: 'King Q.Finn',
    imageUrl: './img/character/200.png',
    power: 1300000
}, {
    id: ++characterIndex,
    name: 'King Q.Roderick',
    imageUrl: './img/character/201.png',
    power: 640000
}, {
    id: ++characterIndex,
    name: 'King Q.Luther',
    imageUrl: './img/character/157.png',
    power: 850000
}, {
    id: ++characterIndex,
    name: 'Mother Cat',
    imageUrl: './img/character/122.png',
    power: 1400000
}, {
    id: ++characterIndex,
    name: 'Elibom Hawk',
    imageUrl: './img/character/090.png',
    power: 185000
}, {
    id: ++characterIndex,
    name: 'Gaia Bull',
    imageUrl: './img/character/166.png',
    power: 175000
}, {
    id: ++characterIndex,
    name: 'Shining Cheetah',
    imageUrl: './img/character/shining.png',
    power: 171000
}, {
    id: ++characterIndex,
    name: 'Chain Dog',
    imageUrl: './img/character/026.png',
    power: 86500
}, {
    id: ++characterIndex,
    name: 'Crimson Beetle',
    imageUrl: './img/character/034.png',
    power: 87000
}, {
    id: ++characterIndex,
    name: 'Verk Rat',
    imageUrl: './img/character/040.png',
    power: 112000
}, {
    id: ++characterIndex,
    name: 'Snicker Magpie',
    imageUrl: './img/character/073.png',
    power: 32800
}, {
    id: ++characterIndex,
    name: 'Sabi Rabbit',
    imageUrl: './img/character/046.png',
    power: 167800
}, {
    id: ++characterIndex,
    name: 'Twink Rabbit',
    imageUrl: './img/character/105.png',
    power: 92500
}, {
    id: ++characterIndex,
    name: 'Frost Polarbear',
    imageUrl: './img/character/009.png',
    power: 285000
}, {
    id: ++characterIndex,
    name: 'Knuckle Owl',
    imageUrl: './img/character/010.png',
    power: 85000
}, {
    id: ++characterIndex,
    name: 'Sky Hawk',
    imageUrl: './img/character/011.png',
    power: 162500
}, {
    id: ++characterIndex,
    name: 'Nill Cat',
    imageUrl: './img/character/012.png',
    power: 32000
}, {
    id: ++characterIndex,
    name: 'Chimon Tortoise',
    imageUrl: './img/character/013.png',
    power: 36000
}, {
    id: ++characterIndex,
    name: 'Sarada Polarbear',
    imageUrl: './img/character/017.png',
    power: 112000
}, {
    id: ++characterIndex,
    name: 'Orgey Pig',
    imageUrl: './img/character/027.png',
    power: 32400
}, {
    id: ++characterIndex,
    name: 'Jolly Elephant',
    imageUrl: './img/character/028.png',
    power: 11000
}, {
    id: ++characterIndex,
    name: 'Feel Rabbit',
    imageUrl: './img/character/029.png',
    power: 74000
}, {
    id: ++characterIndex,
    name: 'Flame Cat',
    imageUrl: './img/character/030.png',
    power: 34000
}, {
    id: ++characterIndex,
    name: 'Ore Panda',
    imageUrl: './img/character/031.png',
    power: 121000
}, {
    id: ++characterIndex,
    name: 'Malee Squirrel',
    imageUrl: './img/character/035.png',
    power: 56500
}, {
    id: ++characterIndex,
    name: 'Shelter Bull',
    imageUrl: './img/character/036.png',
    power: 33800
}, {
    id: ++characterIndex,
    name: 'Dream Sheep',
    imageUrl: './img/character/041.png',
    power: 40000
}, {
    id: ++characterIndex,
    name: 'Kyle Duck',
    imageUrl: './img/character/042.png',
    power: 9000
}, {
    id: ++characterIndex,
    name: 'Remedy Rabbit',
    imageUrl: './img/character/047.png',
    power: 30000
}, {
    id: ++characterIndex,
    name: 'Radow Magpie',
    imageUrl: './img/character/048.png',
    power: 141200
}, {
    id: ++characterIndex,
    name: 'Rampert Tiger',
    imageUrl: './img/character/106.png',
    power: 94000
}, {
    id: ++characterIndex,
    name: 'Caren Eagle',
    imageUrl: './img/character/107.png',
    power: 57000
}, {
    id: ++characterIndex,
    name: 'Rosalia Rat',
    imageUrl: './img/character/108.png',
    power: 57500
}, {
    id: ++characterIndex,
    name: 'Apollo Rabbit',
    imageUrl: './img/character/059.png',
    power: 295000
}, {
    id: ++characterIndex,
    name: 'Hades Rabbit',
    imageUrl: './img/character/060.png',
    power: 400000
}, {
    id: ++characterIndex,
    name: 'Shirou Sparrow',
    imageUrl: './img/character/063.png',
    power: 168200
}, {
    id: ++characterIndex,
    name: 'Ghost Loris',
    imageUrl: './img/character/074.png',
    power: 13200
}, {
    id: ++characterIndex,
    name: 'Cherry Woodpecker',
    imageUrl: './img/character/075.png',
    power: 15400
}, {
    id: ++characterIndex,
    name: 'Ifrit',
    imageUrl: './img/character/133.png',
    power: 260000
}, {
    id: ++characterIndex,
    name: 'Gem & Mini',
    imageUrl: './img/character/134.png',
    power: 280000
}, {
    id: ++characterIndex,
    name: 'Clockwork Beaver',
    imageUrl: './img/character/140.png',
    power: 1500000
}, {
    id: ++characterIndex,
    name: 'Dragon Buffalo',
    imageUrl: './img/character/067.png',
    power: 135000
}, {
    id: ++characterIndex,
    name: 'Fire Grizzlybear',
    imageUrl: './img/character/068.png',
    power: 125000
}, {
    id: ++characterIndex,
    name: 'Tank Boar',
    imageUrl: './img/character/069.png',
    power: 128000
}, {
    id: ++characterIndex,
    name: 'Ruth Rat',
    imageUrl: './img/character/082.png',
    power: 120000
}, {
    id: ++characterIndex,
    name: 'Crune Panther',
    imageUrl: './img/character/089.png',
    power: 38000
}, {
    id: ++characterIndex,
    name: 'Goldy Seal',
    imageUrl: './img/character/119.png',
    power: 141500
}, {
    id: ++characterIndex,
    name: 'Darklord Polarbear',
    imageUrl: './img/character/094.png',
    power: 335000
}, {
    id: ++characterIndex,
    name: 'Spark Dog',
    imageUrl: './img/character/098.png',
    power: 166000
}, {
    id: ++characterIndex,
    name: 'Sharp Wolf',
    imageUrl: './img/character/099.png',
    power: 161800
}, {
    id: ++characterIndex,
    name: 'Rod Polarbear',
    imageUrl: './img/character/100.png',
    power: 18500
}, {
    id: ++characterIndex,
    name: 'Zephyr Hawk',
    imageUrl: './img/character/101.png',
    power: 51000
}, {
    id: ++characterIndex,
    name: 'Dusk Tortoise (KC)',
    imageUrl: './img/character/102.png',
    power: 375000
}, {
    id: ++characterIndex,
    name: 'Leviathan K.Whale',
    imageUrl: './img/ni.png',
    power: 420000
}, {
    id: ++characterIndex,
    name: 'Beelzebub Deer',
    imageUrl: './img/ni.png',
    power: 157400
}, {
    id: ++characterIndex,
    name: 'Father Tortoise (Cl)',
    imageUrl: './img/character/123.png',
    power: 625000
}, {
    id: ++characterIndex,
    name: 'Beaker Cat',
    imageUrl: './img/character/125.png',
    power: 1000000
}, {
    id: ++characterIndex,
    name: 'Illus Fish',
    imageUrl: './img/character/127.png',
    power: 68000
}, {
    id: ++characterIndex,
    name: 'Rose Hawk',
    imageUrl: './img/character/128.png',
    power: 420
}, {
    id: ++characterIndex,
    name: 'Cargo Sheep',
    imageUrl: './img/character/139.png',
    power: 1800
}, {
    id: ++characterIndex,
    name: 'Soulknight Dog',
    imageUrl: './img/ni.png',
    power: 88000
}, {
    id: ++characterIndex,
    name: 'Kawhom',
    imageUrl: './img/character/149.png',
    power: 500000
}, {
    id: ++characterIndex,
    name: 'Den',
    imageUrl: './img/character/150.png',
    power: 170000
}, {
    id: ++characterIndex,
    name: 'Noc Ferret',
    imageUrl: './img/character/151.png',
    power: 250000
}, {
    id: ++characterIndex,
    name: 'Ion',
    imageUrl: './img/character/158.png',
    power: 500000
}, {
    id: ++characterIndex,
    name: 'Leno Wolf',
    imageUrl: './img/character/159.png',
    power: 244000
}, {
    id: ++characterIndex,
    name: 'Bigbang Dog',
    imageUrl: './img/character/161.png',
    power: 600000
}, {
    id: ++characterIndex,
    name: 'Mil Tiger',
    imageUrl: './img/ni.png',
    power: 150500
}, {
    id: ++characterIndex,
    name: 'Lufang Wolf',
    imageUrl: './img/ni.png',
    power: 260000
}, {
    id: ++characterIndex,
    name: 'Daroque Dog',
    imageUrl: './img/character/165.png',
    power: 410000
}, {
    id: ++characterIndex,
    name: 'Anubis Jackal',
    imageUrl: './img/character/169.png',
    power: 167200
}, {
    id: ++characterIndex,
    name: 'Vadore Cat',
    imageUrl: './img/character/173.png',
    power: 167100
}, {
    id: ++characterIndex,
    name: 'MarkII Cat',
    imageUrl: './img/character/174.png',
    power: 121500
}, {
    id: ++characterIndex,
    name: 'Glacier I.Dragon',
    imageUrl: './img/character/176.png',
    power: 67500
}, {
    id: ++characterIndex,
    name: 'Argus Hawk',
    imageUrl: './img/character/192.png',
    power: 265000
}, {
    id: ++characterIndex,
    name: 'Morty Beaver',
    imageUrl: './img/character/193.png',
    power: 160000
}, {
    id: ++characterIndex,
    name: 'Arcania Wolf',
    imageUrl: './img/character/194.png',
    power: 300000
}, {
    id: ++characterIndex,
    name: 'Calibur Dog',
    imageUrl: './img/character/195.png',
    power: 171500
}, {
    id: ++characterIndex,
    name: 'Wiz Tortoise',
    imageUrl: './img/character/196.png',
    power: 210000
}, {
    id: ++characterIndex,
    name: 'Noir Owl',
    imageUrl: './img/character/197.png',
    power: 172000
}, {
    id: ++characterIndex,
    name: 'Putter Dog',
    imageUrl: './img/character/198.png',
    power: 167500
}, {
    id: ++characterIndex,
    name: 'Vein Monkey',
    imageUrl: './img/character/199.png',
    power: 168000
}];
var aiList = [{
    id: ++characterIndex,
    name: 'Lalami Llama',
    imageUrl: './img/character/064.png',
    power: 221000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Raimond Deer',
    imageUrl: './img/character/070.png',
    power: 132000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Dr.Plasma Ferret',
    imageUrl: './img/character/071.png',
    power: 131000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Grid Monkey',
    imageUrl: './img/character/087.png',
    power: 140000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Impact Beetle',
    imageUrl: './img/character/088.png',
    power: 82000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Circuit Dog',
    imageUrl: './img/character/104.png',
    power: 222000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Behemoth Panther',
    imageUrl: './img/character/110.png',
    power: 93000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Ponte Griffin',
    imageUrl: './img/character/093.png',
    power: 92000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Ragnarok Dragon',
    imageUrl: './img/character/114.png',
    power: 600000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Lemon Husky',
    imageUrl: './img/character/118.png',
    power: 84000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Lucifer Cat',
    imageUrl: './img/character/126.png',
    power: 1578500,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Sabor Rabbit',
    imageUrl: './img/character/141.png',
    power: 151500,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Bomber Otter',
    imageUrl: './img/character/142.png',
    power: 98000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Zetal Redpanda',
    imageUrl: './img/character/143.png',
    power: 95000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Bandage Squirrel',
    imageUrl: './img/character/144.png',
    power: 91000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'DArmor Polarbear',
    imageUrl: './img/character/145.png',
    power: 89000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Erov Crocodile',
    imageUrl: './img/character/146.png',
    power: 86800,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Gana Squirrel',
    imageUrl: './img/character/179.png',
    power: 85000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Topaz Beagle',
    imageUrl: './img/character/188.png',
    power: 161000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Money Redpanda',
    imageUrl: './img/character/189.png',
    power: 51000,
    ai: true
}, {
    id: ++characterIndex,
    name: 'Quark Shepherd',
    imageUrl: './img/character/191.png',
    power: 165000,
    ai: true
}];
var deprecatedList = [{
    id: ++characterIndex,
    name: 'Kmkadm Camel',
    imageUrl: './img/ni.png',
    power: 50,
    deprecated: true
}, {
    id: ++characterIndex,
    name: 'Phiral Penguin',
    imageUrl: './img/character/018.png',
    power: 11200
}, {
    id: ++characterIndex,
    name: 'Beo Basillisk',
    imageUrl: './img/character/019.png',
    power: 18000
}, {
    id: ++characterIndex,
    name: 'Weremon Wolf',
    imageUrl: './img/character/020.png',
    power: 21500
}, {
    id: ++characterIndex,
    name: 'Chika Mole',
    imageUrl: './img/character/021.png',
    power: 18200
}, {
    id: ++characterIndex,
    name: 'Signal Hedgehog',
    imageUrl: './img/character/022.png',
    power: 5200
}, {
    id: ++characterIndex,
    name: 'Alex Rat',
    imageUrl: './img/character/023.png',
    power: 66500
}, {
    id: ++characterIndex,
    name: 'Zuri Sparrow',
    imageUrl: './img/character/024.png',
    power: 9500
}, {
    id: ++characterIndex,
    name: 'Sica Frog',
    imageUrl: './img/character/032.png',
    power: 7200
}, {
    id: ++characterIndex,
    name: 'Phenia Phoenix',
    imageUrl: './img/character/038.png',
    power: 25000
}, {
    id: ++characterIndex,
    name: 'Chimone Chimera',
    imageUrl: './img/character/044.png',
    power: 60000
}, {
    id: ++characterIndex,
    name: 'Pearl Tortoise (LD)',
    imageUrl: './img/ni.png',
    power: 75000
}, {
    id: ++characterIndex,
    name: 'Black Rabbit',
    imageUrl: './img/character/050.png',
    power: 58000
}, {
    id: ++characterIndex,
    name: 'White Rabbit',
    imageUrl: './img/character/051.png',
    power: 55000
}, {
    id: ++characterIndex,
    name: 'Chipper Chick',
    imageUrl: './img/character/160.png',
    power: 41000
}, {
    id: ++characterIndex,
    name: 'Pride',
    imageUrl: './img/character/167.png',
    power: 1177000
}, {
    id: ++characterIndex,
    name: 'Leaf Dog',
    imageUrl: './img/ni.png',
    power: 50000
}, {
    id: ++characterIndex,
    name: 'Lucas Rat',
    imageUrl: './img/ni.png',
    power: 83000
}, {
    id: ++characterIndex,
    name: 'Glitter Hamster',
    imageUrl: './img/ni.png',
    power: 100000
}, {
    id: ++characterIndex,
    name: 'Flanky Otter',
    imageUrl: './img/character/131.png',
    power: 340000
}, {
    id: ++characterIndex,
    name: 'Bronze Deer',
    imageUrl: './img/character/135.png',
    power: 18700
}, {
    id: ++characterIndex,
    name: 'Cosmos Duck',
    imageUrl: './img/character/136.png',
    power: 9100
}, {
    id: ++characterIndex,
    name: 'Plub Rabbit',
    imageUrl: './img/character/137.png',
    power: 8900
}, {
    id: ++characterIndex,
    name: 'Dark Polarbear',
    imageUrl: './img/character/138.png',
    power: 43000
}, {
    id: ++characterIndex,
    name: 'Mobile Eagle',
    imageUrl: './img/character/091.png',
    power: 95000
}, {
    id: ++characterIndex,
    name: 'Doppelganger Cha.',
    imageUrl: './img/ni.png',
    power: 86500
}, {
    id: ++characterIndex,
    name: 'Diamond Dog',
    imageUrl: './img/character/095.png',
    power: 440
}, {
    id: ++characterIndex,
    name: 'Paper Owl',
    imageUrl: './img/character/096.png',
    power: 53000
}, {
    id: ++characterIndex,
    name: 'Bullet Tortoise',
    imageUrl: './img/character/097.png',
    power: 52500
}, {
    id: ++characterIndex,
    name: 'Mammon Monkey',
    imageUrl: './img/ni.png',
    power: 150500
}, {
    id: ++characterIndex,
    name: 'Jewel Hawk',
    imageUrl: './img/character/115.png',
    power: 1500
}, {
    id: ++characterIndex,
    name: 'Spinal Lionsea',
    imageUrl: './img/ni.png',
    power: 35000
}, {
    id: ++characterIndex,
    name: 'Rildo Rabbit',
    imageUrl: './img/character/058.png',
    power: 600,
    deprecated: true
}, {
    id: ++characterIndex,
    name: 'Hiphip Hippo',
    imageUrl: './img/ni.png',
    power: 32200,
    deprecated: true
}, {
    id: ++characterIndex,
    name: 'Horus Hawk',
    imageUrl: './img/character/171.png',
    power: 52000,
    deprecated: true
}, {
    id: ++characterIndex,
    name: 'Sobek Crocodile',
    imageUrl: './img/character/172.png',
    power: 24000,
    deprecated: true
}, {
    id: ++characterIndex,
    name: 'Messe',
    imageUrl: './img/character/175.png',
    power: 82500,
    deprecated: true
}, {
    id: ++characterIndex,
    name: 'Alpaca Cat',
    imageUrl: './img/character/177.png',
    power: 32100,
    deprecated: true
}, {
    id: ++characterIndex,
    name: 'Livo Squirrel',
    imageUrl: './img/character/180.png',
    power: 10000,
    deprecated: true
}, {
    id: ++characterIndex,
    name: 'Shamant Squirrel',
    imageUrl: './img/character/181.png',
    power: 7500,
    deprecated: true
}, {
    id: ++characterIndex,
    name: 'Musica Cat',
    imageUrl: './img/character/182.png',
    power: 14500,
    deprecated: true
}, {
    id: ++characterIndex,
    name: 'Punchz Cat',
    imageUrl: './img/character/183.png',
    power: 12200,
    deprecated: true
}, {
    id: ++characterIndex,
    name: 'Minerva Mink',
    imageUrl: './img/ni.png',
    power: 39000
}, {
    id: ++characterIndex,
    name: 'Nume Sparrow',
    imageUrl: './img/character/065.png',
    power: 750
}, {
    id: ++characterIndex,
    name: 'Charotte Parrot',
    imageUrl: './img/character/066.png',
    power: 1050
}, {
    id: ++characterIndex,
    name: 'Red Rabbit',
    imageUrl: './img/ni.png',
    power: 24000
}, {
    id: ++characterIndex,
    name: 'Yellow Rabbit',
    imageUrl: './img/ni.png',
    power: 21000
}, {
    id: ++characterIndex,
    name: 'Green Rabbit',
    imageUrl: './img/ni.png',
    power: 23500
}, {
    id: ++characterIndex,
    name: 'Blue Rabbit',
    imageUrl: './img/ni.png',
    power: 24500
}, {
    id: ++characterIndex,
    name: 'Brown Rabbit',
    imageUrl: './img/ni.png',
    power: 20800
}, {
    id: ++characterIndex,
    name: 'Gray Rabbit',
    imageUrl: './img/ni.png',
    power: 20500
}, {
    id: ++characterIndex,
    name: 'Golgol Slime',
    imageUrl: './img/character/016.png',
    power: 72000
}, {
    id: ++characterIndex,
    name: 'Bastet Cat',
    imageUrl: './img/character/170.png',
    power: 92000
}, {
    id: ++characterIndex,
    name: 'Hedro Hydra',
    imageUrl: './img/ni.png',
    power: 60200
}, {
    id: ++characterIndex,
    name: 'Cerberus',
    imageUrl: './img/ni.png',
    power: 50000
}, {
    id: ++characterIndex,
    name: 'Uka Camel',
    imageUrl: './img/character/076.png',
    power: 11500
}, {
    id: ++characterIndex,
    name: 'Agu Giraffe',
    imageUrl: './img/character/077.png',
    power: 9200
}, {
    id: ++characterIndex,
    name: 'Egae Gecko',
    imageUrl: './img/character/078.png',
    power: 4500
}, {
    id: ++characterIndex,
    name: 'Uke Monkey',
    imageUrl: './img/character/079.png',
    power: 3200
}, {
    id: ++characterIndex,
    name: 'Lightning Cheetah',
    imageUrl: './img/ni.png',
    power: 130000
}, {
    id: ++characterIndex,
    name: 'Caesar Rat',
    imageUrl: './img/ni.png',
    power: 120
}, {
    id: ++characterIndex,
    name: 'Mawmaw Termite',
    imageUrl: './img/character/084.png',
    power: 6800
}, {
    id: ++characterIndex,
    name: 'Wing Butterfly',
    imageUrl: './img/character/085.png',
    power: 6000
}, {
    id: ++characterIndex,
    name: 'Midmid Ant',
    imageUrl: './img/character/086.png',
    power: 4800
}];
var extendedInfo = [{
    id: ++characterIndex,
    name: 'Phoenix',
    imageUrl: './img/character/phoenix.png',
    power: 2000000
}, {
    id: ++characterIndex,
    name: 'Mission Eagle',
    imageUrl: './img/ni.png',
    power: 37000
}, {
    id: ++characterIndex,
    name: 'Big Bull',
    imageUrl: './img/ni.png',
    power: 33000
}, {
    id: ++characterIndex,
    name: 'My Rabbit',
    imageUrl: './img/ni.png',
    power: 15200
}, {
    id: ++characterIndex,
    name: 'Saki Cat',
    imageUrl: './img/ni.png',
    power: 21200
}, {
    id: ++characterIndex,
    name: 'Hunter Tiger',
    imageUrl: './img/character/043.png',
    power: 162000
}, {
    id: ++characterIndex,
    name: 'Rom (Merlin Dog)',
    imageUrl: './img/ni.png',
    power: 13800
}, {
    id: ++characterIndex,
    name: 'Bruno Dragon',
    imageUrl: './img/ni.png',
    power: 20000
}, {
    id: ++characterIndex,
    name: 'Drive Hawk',
    imageUrl: './img/ni.png',
    power: 19000
}, {
    id: ++characterIndex,
    name: 'Cloud Wolf',
    imageUrl: './img/ni.png',
    power: 19500
}, {
    id: ++characterIndex,
    name: 'Samli Rat',
    imageUrl: './img/ni.png',
    power: 15000
}, {
    id: ++characterIndex,
    name: 'Veenus Dolphin',
    imageUrl: './img/ni.png',
    power: 42000
}, {
    id: ++characterIndex,
    name: 'White Sheep',
    imageUrl: './img/ni.png',
    power: 69000
}];

function initCharacterInfo() {
    characterNodeList = [];
    
    if(filterBy != null) {
        if (filterBy == 'ai') {
            characterInfo = aiList;
        } else if (filterBy == 'nonai') {
            characterInfo = characterInfo;
        } else if (filterBy == 'deprecated') {
            characterInfo = deprecatedList;                             // show only deprecated list
        }
    } else {
        // let default show non ai
        characterInfo = characterInfo;
    }

    if(sortBy != null) {
        if(sortBy == 'power') {
            let loopCount = characterInfo.length;
            for(let i=0; i<loopCount; i++) {
                characterInfo[i].power = getFusionPower(characterInfo[i], characterInfo);
            }
            characterInfo = characterInfo.sort((a, b) => b.power - a.power);
        }
    }

    if(extendedInfo != null) {
        if(extendedInfo == 'true') {
            characterInfo = extendedInfo;
        }
    }

    characterInfo.forEach(node => {
        characterNodeList.push(node);
    });
}

initCharacterInfo();