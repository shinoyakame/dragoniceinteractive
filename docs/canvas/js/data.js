const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sortBy = urlParams.get('sortBy');

class CharacterNode {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
}

var characterNodeList = [];



var characterInfo = [{
    id: 1,
    name: 'Cycle Dog',
    imageUrl: './img/character/001.png',
    power: 650000
}, {
    id: 2,
    name: 'Zero Redpanda',
    imageUrl: './img/character/002.png',
    power: 620000
}, {
    id: 3,
    name: 'Lighter Fennec (Tox)',
    imageUrl: './img/character/003.png',
    power: 680000
}, {
    id: 4,
    name: 'King Q.Arthur',
    imageUrl: './img/character/004.png',
    power: 1200000
}, {
    id: 5,
    name: 'Sakaji Orca (Zakaj)',
    imageUrl: './img/character/005.png',
    power: 348500
}, {
    id: 6,
    name: 'Neon Ferret',
    imageUrl: './img/character/006.png',
    power: 414000
}, {
    id: 7,
    name: 'Phoenix',
    imageUrl: './img/character/007.png',
    power: 2000000
}, {
    id: 8,
    name: 'Ray Tortoise (DL)',
    imageUrl: './img/character/008.png',
    power: 375000
}, {
    id: 9,
    name: 'Frost Polarbear (W)',
    imageUrl: './img/character/009.png',
    power: 285000
}, {
    id: 10,
    name: 'Knuckle Owl',
    imageUrl: './img/character/010.png',
    power: 85000
}, {
    id: 11,
    name: 'Sky Hawk (W)',
    imageUrl: './img/character/011.png',
    power: 162500
}, {
    id: 12,
    name: 'Nill Cat',
    imageUrl: './img/character/012.png',
    power: 32000
}, {
    id: 13,
    name: 'Chimon Tortoise',
    imageUrl: './img/character/013.png',
    power: 36000
}, {
    id: 14,
    name: 'Saito Dog',
    imageUrl: './img/character/014.png',
    power: 310000
}, {
    id: 15,
    name: 'Chelonia Tortoise',
    imageUrl: './img/character/015.png',
    power: 620000
}, {
    id: 16,
    name: 'Golgol Slime',
    imageUrl: './img/character/016.png',
    power: 72000
}, {
    id: 17,
    name: 'Sarada Polarbear',
    imageUrl: './img/character/017.png',
    power: 112000
}, {
    id: 18,
    name: 'Phiral Penguin',
    imageUrl: './img/character/018.png',
    power: 11200
}, {
    id: 19,
    name: 'Beo Basillisk',
    imageUrl: './img/character/019.png',
    power: 18000
}, {
    id: 20,
    name: 'Weremon Wolf',
    imageUrl: './img/character/020.png',
    power: 21500
}, {
    id: 21,
    name: 'Chika Mole',
    imageUrl: './img/character/021.png',
    power: 18200
}, {
    id: 22,
    name: 'Signal Hedgehog',
    imageUrl: './img/character/022.png',
    power: 5200
}, {
    id: 23,
    name: 'Alex Rat',
    imageUrl: './img/character/023.png',
    power: 66500
}, {
    id: 24,
    name: 'Zuri Sparrow',
    imageUrl: './img/character/024.png',
    power: 9500
}, {
    id: 25,
    name: 'Bruno Fox',
    imageUrl: './img/character/025.png',
    power: 161500
}, {
    id: 26,
    name: 'Chain Dog',
    imageUrl: './img/character/026.png',
    power: 86500
}, {
    id: 27,
    name: 'Orgey Pig',
    imageUrl: './img/character/027.png',
    power: 32400
}, {
    id: 28,
    name: 'Jolly Elephant',
    imageUrl: './img/character/028.png',
    power: 11000
}, {
    id: 29,
    name: 'Feel Rabbit',
    imageUrl: './img/character/029.png',
    power: 74000
}, {
    id: 30,
    name: 'Flame Cat',
    imageUrl: './img/character/030.png',
    power: 34000
}, {
    id: 31,
    name: 'Ore Panda',
    imageUrl: './img/character/031.png',
    power: 121000
}, {
    id: 32,
    name: 'Sica Frog',
    imageUrl: './img/character/032.png',
    power: 7200
}, {
    id: 33,
    name: 'Sune Monkey',
    imageUrl: './img/character/033.png',
    power: 160450
}, {
    id: 34,
    name: 'Crimson Beetle',
    imageUrl: './img/character/034.png',
    power: 87000
}, {
    id: 35,
    name: 'Malee Squirrel',
    imageUrl: './img/character/035.png',
    power: 56500
}, {
    id: 36,
    name: 'Shelter Bull',
    imageUrl: './img/character/036.png',
    power: 33800
}, {
    id: 37,
    name: 'Veenus Dolphin',
    imageUrl: './img/ni.png',
    power: 42000
}, {
    id: 38,
    name: 'Phenia Phoenix',
    imageUrl: './img/character/038.png',
    power: 25000
}, {
    id: 39,
    name: 'Magma Lion',
    imageUrl: './img/character/039.png',
    power: 167000
}, {
    id: 40,
    name: 'Verk Rat',
    imageUrl: './img/character/040.png',
    power: 112000
}, {
    id: 41,
    name: 'Dream Sheep',
    imageUrl: './img/character/041.png',
    power: 40000
}, {
    id: 42,
    name: 'Kyle Duck',
    imageUrl: './img/character/042.png',
    power: 9000
}, {
    id: 43,
    name: 'Hunter Tiger',
    imageUrl: './img/character/043.png',
    power: 162000
}, {
    id: 44,
    name: 'Chimone Chimera',
    imageUrl: './img/character/044.png',
    power: 60000
}, {
    id: 45,
    name: 'Champion Rabbit',
    imageUrl: './img/character/045.png',
    power: 190000
}, {
    id: 46,
    name: 'Sabi Rabbit',
    imageUrl: './img/character/046.png',
    power: 167800
}, {
    id: 47,
    name: 'Remedy Rabbit',
    imageUrl: './img/character/047.png',
    power: 30000
}, {
    id: 48,
    name: 'Radow Magpie',
    imageUrl: './img/character/048.png',
    power: 141200
}, {
    id: 49,
    name: 'Pearl Tortoise (LD)',
    imageUrl: './img/ni.png',
    power: 75000
}, {
    id: 50,
    name: 'Black Rabbit',
    imageUrl: './img/character/050.png',
    power: 58000
}, {
    id: 51,
    name: 'White Rabbit',
    imageUrl: './img/character/051.png',
    power: 55000
}, {
    id: 52,
    name: 'Red Rabbit',
    imageUrl: './img/ni.png',
    power: 24000
}, {
    id: 53,
    name: 'Yellow Rabbit',
    imageUrl: './img/ni.png',
    power: 21000
}, {
    id: 54,
    name: 'Green Rabbit',
    imageUrl: './img/ni.png',
    power: 23500
}, {
    id: 55,
    name: 'Blue Rabbit',
    imageUrl: './img/ni.png',
    power: 24500
}, {
    id: 56,
    name: 'Brown Rabbit',
    imageUrl: './img/ni.png',
    power: 20800
}, {
    id: 57,
    name: 'Gray Rabbit',
    imageUrl: './img/ni.png',
    power: 20500
}, {
    id: 58,
    name: 'Rildo Rabbit',
    imageUrl: './img/character/058.png',
    power: 600,
    deprecated: true
}, {
    id: 59,
    name: 'Apollo Rabbit',
    imageUrl: './img/character/059.png',
    power: 295000
}, {
    id: 60,
    name: 'Hades Rabbit',
    imageUrl: './img/character/060.png',
    power: 400000
}, {
    id: 61,
    name: 'Shining Cheetah',
    imageUrl: './img/character/061.png',
    power: 171000
}, {
    id: 62,
    name: 'Lightning Cheetah',
    imageUrl: './img/ni.png',
    power: 130000
}, {
    id: 63,
    name: 'Shirou Sparrow',
    imageUrl: './img/character/063.png',
    power: 168200
}, {
    id: 64,
    name: 'Lalami Llama',
    imageUrl: './img/ni.png',
    power: 221000
}, {
    id: 65,
    name: 'Nume Sparrow',
    imageUrl: './img/character/065.png',
    power: 750
}, {
    id: 66,
    name: 'Charotte Parrot',
    imageUrl: './img/character/066.png',
    power: 1050
}, {
    id: 67,
    name: 'Dragon Buffalo',
    imageUrl: './img/character/067.png',
    power: 135000
}, {
    id: 68,
    name: 'Fire Grizzlybear',
    imageUrl: './img/character/068.png',
    power: 125000
}, {
    id: 69,
    name: 'Tank Boar',
    imageUrl: './img/character/069.png',
    power: 128000
}, {
    id: 70,
    name: 'Raimond Deer',
    imageUrl: './img/ni.png',
    power: 132000
}, {
    id: 71,
    name: 'Dr.Plasma Ferret',
    imageUrl: './img/ni.png',
    power: 131000
}, {
    id: 72,
    name: 'Undead Seal',
    imageUrl: './img/character/072.png',
    power: 118000
}, {
    id: 73,
    name: 'Snicker Magpie',
    imageUrl: './img/character/073.png',
    power: 32800
}, {
    id: 74,
    name: 'Ghost Loris',
    imageUrl: './img/character/074.png',
    power: 13200
}, {
    id: 75,
    name: 'Cherry Woodpecker',
    imageUrl: './img/character/075.png',
    power: 15400
}, {
    id: 76,
    name: 'Uka Camel',
    imageUrl: './img/character/076.png',
    power: 11500
}, {
    id: 77,
    name: 'Agu Giraffe',
    imageUrl: './img/character/077.png',
    power: 9200
}, {
    id: 78,
    name: 'Egae Gecko',
    imageUrl: './img/character/078.png',
    power: 4500
}, {
    id: 79,
    name: 'Uke Monkey',
    imageUrl: './img/character/079.png',
    power: 3200
}, {
    id: 80,
    name: 'Kmkadm Camel',
    imageUrl: './img/ni.png',
    power: 50,
    deprecated: true
}, {
    id: 81,
    name: 'Spinal Lionsea',
    imageUrl: './img/ni.png',
    power: 35000
}, {
    id: 82,
    name: 'Ruth Rat',
    imageUrl: './img/character/082.png',
    power: 120000
}, {
    id: 83,
    name: 'Caesar Rat',
    imageUrl: './img/ni.png',
    power: 120
}, {
    id: 84,
    name: 'Mawmaw Termite',
    imageUrl: './img/character/084.png',
    power: 6800
}, {
    id: 85,
    name: 'Wing Butterfly',
    imageUrl: './img/character/085.png',
    power: 6000
}, {
    id: 86,
    name: 'Midmid Ant',
    imageUrl: './img/character/086.png',
    power: 4800
}, {
    id: 87,
    name: 'Grid Monkey',
    imageUrl: './img/character/087.png',
    power: 140000
}, {
    id: 88,
    name: 'Impact Beetle',
    imageUrl: './img/character/088.png',
    power: 82000
}, {
    id: 89,
    name: 'Crune Panther',
    imageUrl: './img/character/089.png',
    power: 38000
}, {
    id: 90,
    name: 'Elibom Hawk',
    imageUrl: './img/character/090.png',
    power: 185000
}, {
    id: 91,
    name: 'Mobile Eagle',
    imageUrl: './img/character/091.png',
    power: 95000
}, {
    id: 92,
    name: 'Doppelganger Cha.',
    imageUrl: './img/ni.png',
    power: 86500
}, {
    id: 93,
    name: 'Ponte Griffin',
    imageUrl: './img/ni.png',
    power: 92000
}, {
    id: 94,
    name: 'Darklord Polarbear',
    imageUrl: './img/character/094.png',
    power: 335000
}, {
    id: 95,
    name: 'Diamond Dog',
    imageUrl: './img/character/095.png',
    power: 440
}, {
    id: 96,
    name: 'Paper Owl',
    imageUrl: './img/character/096.png',
    power: 53000
}, {
    id: 97,
    name: 'Bullet Tortoise',
    imageUrl: './img/character/097.png',
    power: 52500
}, {
    id: 98,
    name: 'Spark Dog',
    imageUrl: './img/character/098.png',
    power: 166000
}, {
    id: 99,
    name: 'Sharp Wolf',
    imageUrl: './img/character/099.png',
    power: 161800
}, {
    id: 100,
    name: 'Rod Polarbear',
    imageUrl: './img/character/100.png',
    power: 18500
}, {
    id: 101,
    name: 'Zephyr Hawk',
    imageUrl: './img/character/101.png',
    power: 51000
}, {
    id: 102,
    name: 'Dusk Tortoise (KC)',
    imageUrl: './img/character/102.png',
    power: 375000
}, {
    id: 103,
    name: 'Cerberus',
    imageUrl: './img/ni.png',
    power: 50000
}, {
    id: 104,
    name: 'Circuit Dog',
    imageUrl: './img/ni.png',
    power: 222000
}, {
    id: 105,
    name: 'Twink Rabbit',
    imageUrl: './img/character/105.png',
    power: 92500
}, {
    id: 106,
    name: 'Rampert Tiger',
    imageUrl: './img/character/106.png',
    power: 94000
}, {
    id: 107,
    name: 'Caren Eagle',
    imageUrl: './img/character/107.png',
    power: 57000
}, {
    id: 108,
    name: 'Rosalia Rat',
    imageUrl: './img/character/108.png',
    power: 57500
}, {
    id: 109,
    name: 'Minerva Mink',
    imageUrl: './img/ni.png',
    power: 39000
}, {
    id: 110,
    name: 'Behemoth Panther',
    imageUrl: './img/ni.png',
    power: 93000
}, {
    id: 111,
    name: 'Leviathan K.Whale',
    imageUrl: './img/ni.png',
    power: 420000
}, {
    id: 112,
    name: 'Beelzebub Deer',
    imageUrl: './img/ni.png',
    power: 157400
}, {
    id: 113,
    name: 'Mammon Monkey',
    imageUrl: './img/ni.png',
    power: 150500
}, {
    id: 114,
    name: 'Ragnarok Dragon',
    imageUrl: './img/ni.png',
    power: 600000
}, {
    id: 115,
    name: 'Jewel Hawk',
    imageUrl: './img/character/115.png',
    power: 1500
}, {
    id: 116,
    name: 'Glitter Hamster',
    imageUrl: './img/ni.png',
    power: 100000
}, {
    id: 117,
    name: 'Gelix Raccoon (Lust)',
    imageUrl: './img/character/117.png',
    power: 1800000
}, {
    id: 118,
    name: 'Lemon Husky',
    imageUrl: './img/ni.png',
    power: 84000
}, {
    id: 119,
    name: 'Goldy Seal',
    imageUrl: './img/character/119.png',
    power: 141500
}, {
    id: 120,
    name: 'Pure Otter',
    imageUrl: './img/character/120.png',
    power: 900000
}, {
    id: 121,
    name: 'Sloth Goat',
    imageUrl: './img/character/121.png',
    power: 629000
}, {
    id: 122,
    name: 'Mother Cat (Rena)',
    imageUrl: './img/character/122.png',
    power: 1400000
}, {
    id: 123,
    name: 'Father Tortoise (Cl)',
    imageUrl: './img/character/123.png',
    power: 625000
}, {
    id: 124,
    name: 'Hiphip Hippo',
    imageUrl: './img/ni.png',
    power: 32200,
    deprecated: true
}, {
    id: 125,
    name: 'Beaker Cat',
    imageUrl: './img/character/125.png',
    power: 1000000
}, {
    id: 126,
    name: 'Lucifer Cat',
    imageUrl: './img/ni.png',
    power: 1578500
}, {
    id: 127,
    name: 'Illus Fish',
    imageUrl: './img/character/127.png',
    power: 68000
}, {
    id: 128,
    name: 'Rose Hawk',
    imageUrl: './img/character/128.png',
    power: 420
}, {
    id: 129,
    name: 'Luna Chick',
    imageUrl: './img/character/129.png',
    power: 415000
}, {
    id: 130,
    name: 'Shadowman Dog',
    imageUrl: './img/character/130.png',
    power: 440000
}, {
    id: 131,
    name: 'Flanky Otter',
    imageUrl: './img/character/131.png',
    power: 340000
}, {
    id: 132,
    name: 'Envy Dragon',
    imageUrl: './img/character/132.png',
    power: 1228000
}, {
    id: 133,
    name: 'Ifris',
    imageUrl: './img/ni.png',
    power: 260000
}, {
    id: 134,
    name: 'Gemini Spirit',
    imageUrl: './img/ni.png',
    power: 280000
}, {
    id: 135,
    name: 'Bronze Deer',
    imageUrl: './img/character/135.png',
    power: 18700
}, {
    id: 136,
    name: 'Cosmos Duck',
    imageUrl: './img/character/136.png',
    power: 9100
}, {
    id: 137,
    name: 'Plub Rabbit',
    imageUrl: './img/character/137.png',
    power: 8900
}, {
    id: 138,
    name: 'Dark Polarbear',
    imageUrl: './img/character/138.png',
    power: 43000
}, {
    id: 139,
    name: 'Cargo Sheep',
    imageUrl: './img/character/139.png',
    power: 1800
}, {
    id: 140,
    name: 'Clockwork Beaver',
    imageUrl: './img/character/140.png',
    power: 1500000
}, {
    id: 141,
    name: 'Sabor Rabbit',
    imageUrl: './img/ni.png',
    power: 151500
}, {
    id: 142,
    name: 'Bomber Otter',
    imageUrl: './img/ni.png',
    power: 75000
}, {
    id: 143,
    name: 'Zetal Redpanda',
    imageUrl: './img/ni.png',
    power: 73000
}, {
    id: 144,
    name: 'Ms.Bandage Squirrel',
    imageUrl: './img/ni.png',
    power: 65000
}, {
    id: 145,
    name: 'DArmor Polarbear',
    imageUrl: './img/ni.png',
    power: 64000
}, {
    id: 146,
    name: 'Erov Crocodile',
    imageUrl: './img/ni.png',
    power: 64500
}, {
    id: 147,
    name: 'Mito Fox',
    imageUrl: './img/character/147.png',
    power: 2200000
}, {
    id: 148,
    name: 'Soulknight Dog',
    imageUrl: './img/ni.png',
    power: 88000
}, {
    id: 149,
    name: 'Kawhom',
    imageUrl: './img/character/149.png',
    power: 500000
}, {
    id: 150,
    name: 'Den',
    imageUrl: './img/character/150.png',
    power: 170000
}, {
    id: 151,
    name: 'Noc Ferret',
    imageUrl: './img/character/151.png',
    power: 250000
}, {
    id: 152,
    name: 'Rom (Merlin Dog)',
    imageUrl: './img/ni.png',
    power: 13800
}, {
    id: 153,
    name: 'Bruno Dragon',
    imageUrl: './img/ni.png',
    power: 20000
}, {
    id: 154,
    name: 'Drive Hawk',
    imageUrl: './img/ni.png',
    power: 19000
}, {
    id: 155,
    name: 'Cloud Wolf',
    imageUrl: './img/ni.png',
    power: 19500
}, {
    id: 156,
    name: 'Samli Rat',
    imageUrl: './img/ni.png',
    power: 15000
}, {
    id: 157,
    name: 'King Q.Luther',
    imageUrl: './img/character/157.png',
    power: 850000
}, {
    id: 158,
    name: 'Ion',
    imageUrl: './img/character/158.png',
    power: 500000
}, {
    id: 159,
    name: 'Leno Wolf',
    imageUrl: './img/character/159.png',
    power: 244000
}, {
    id: 160,
    name: 'Chipper Chick',
    imageUrl: './img/character/160.png',
    power: 41000
}, {
    id: 161,
    name: 'Bigbang Dog',
    imageUrl: './img/character/161.png',
    power: 600000
}, {
    id: 162,
    name: 'Mil Tiger',
    imageUrl: './img/ni.png',
    power: 150500
}, {
    id: 163,
    name: 'Lucas Rat',
    imageUrl: './img/ni.png',
    power: 83000
}, {
    id: 164,
    name: 'Lufang Wolf',
    imageUrl: './img/ni.png',
    power: 260000
}, {
    id: 165,
    name: 'Daroque Dog',
    imageUrl: './img/character/165.png',
    power: 410000
}, {
    id: 166,
    name: 'Gaia Bull',
    imageUrl: './img/character/166.png',
    power: 175000
}, {
    id: 167,
    name: 'Pride',
    imageUrl: './img/character/167.png',
    power: 1177000
}, {
    id: 168,
    name: 'White Sheep',
    imageUrl: './img/ni.png',
    power: 69000
}, {
    id: 169,
    name: 'Anubis Jackal',
    imageUrl: './img/character/169.png',
    power: 167200
}, {
    id: 170,
    name: 'Bastet Cat',
    imageUrl: './img/character/170.png',
    power: 92000
}, {
    id: 171,
    name: 'Horus Hawk',
    imageUrl: './img/character/171.png',
    power: 52000,
    deprecated: true
}, {
    id: 172,
    name: 'Sobek Crocodile',
    imageUrl: './img/character/172.png',
    power: 24000,
    deprecated: true
}, {
    id: 173,
    name: 'Vadore Cat',
    imageUrl: './img/character/173.png',
    power: 167100
}, {
    id: 174,
    name: 'MarkII Cat',
    imageUrl: './img/character/174.png',
    power: 121500
}, {
    id: 175,
    name: 'Messe',
    imageUrl: './img/character/175.png',
    power: 82500,
    deprecated: true
}, {
    id: 176,
    name: 'Glacier I.Dragon',
    imageUrl: './img/character/176.png',
    power: 67500
}, {
    id: 177,
    name: 'Alpaca Cat',
    imageUrl: './img/character/177.png',
    power: 32100,
    deprecated: true
}, {
    id: 178,
    name: 'Hedro Hydra',
    imageUrl: './img/ni.png',
    power: 60200
}, {
    id: 179,
    name: 'Gana Squirrel',
    imageUrl: './img/character/179.png',
    power: 14000
}, {
    id: 180,
    name: 'Livo Squirrel',
    imageUrl: './img/character/180.png',
    power: 10000,
    deprecated: true
}, {
    id: 181,
    name: 'Shamant Squirrel',
    imageUrl: './img/character/181.png',
    power: 7500,
    deprecated: true
}, {
    id: 182,
    name: 'Musica Cat',
    imageUrl: './img/character/182.png',
    power: 14500,
    deprecated: true
}, {
    id: 183,
    name: 'Punchz Cat',
    imageUrl: './img/character/183.png',
    power: 12200,
    deprecated: true
}, {
    id: 184,
    name: 'Mission Eagle',
    imageUrl: './img/ni.png',
    power: 37000
}, {
    id: 185,
    name: 'Big Bull',
    imageUrl: './img/ni.png',
    power: 33000
}, {
    id: 186,
    name: 'My Rabbit',
    imageUrl: './img/ni.png',
    power: 15200
}, {
    id: 187,
    name: 'Saki Cat',
    imageUrl: './img/ni.png',
    power: 21200
}, {
    id: 188,
    name: 'Topaz Beagle',
    imageUrl: './img/ni.png',
    power: 161000
}, {
    id: 189,
    name: 'Money Redpanda',
    imageUrl: './img/ni.png',
    power: 51000
}, {
    id: 190,
    name: 'Leaf Dog',
    imageUrl: './img/ni.png',
    power: 50000
}, {
    id: 191,
    name: 'Quark Shepherd',
    imageUrl: './img/ni.png',
    power: 165000
}, {
    id: 192,
    name: 'Argus Hawk',
    imageUrl: './img/character/192.png',
    power: 265000
}, {
    id: 193,
    name: 'Morty Beaver',
    imageUrl: './img/character/193.png',
    power: 160000
}, {
    id: 194,
    name: 'Arcania Wolf',
    imageUrl: './img/character/194.png',
    power: 300000
}, {
    id: 195,
    name: 'Calibur Dog',
    imageUrl: './img/character/195.png',
    power: 171500
}, {
    id: 196,
    name: 'Wiz Tortoise',
    imageUrl: './img/character/196.png',
    power: 210000
}, {
    id: 197,
    name: 'Noir Owl',
    imageUrl: './img/character/197.png',
    power: 172000
}, {
    id: 198,
    name: 'Putter Dog',
    imageUrl: './img/character/198.png',
    power: 167500
}, {
    id: 199,
    name: 'Vein Monkey',
    imageUrl: './img/character/199.png',
    power: 168000
}, {
    id: 200,
    name: 'King Q.Finn',
    imageUrl: './img/character/200.png',
    power: 1300000
}, {
    id: 201,
    name: 'King Q.Roderick',
    imageUrl: './img/character/201.png',
    power: 640000
}];

function initCharacterInfo() {
    characterNodeList = [];
        
    if(sortBy != null) {
        if(sortBy == 'power') {
            let loopCount = characterInfo.length;
            for(let i=0; i<loopCount; i++) {
                characterInfo[i].power = getFusionPower(characterInfo[i], characterInfo);
            }
            characterInfo = characterInfo.sort((a, b) => b.power - a.power);
        }
    }

    characterInfo.forEach(node => {
        characterNodeList.push(node);
    });
}

initCharacterInfo();