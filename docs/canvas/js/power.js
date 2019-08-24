// power system (destruction centimeters)
// E = 0 - 30
// D = 31 - 500
// etc.

const levelMargins = [{
        rank: 'E',
        margin: 30,
        color: 'black'
    },
    {
        rank: 'D-',
        margin: 100,
        color: 'brown'
    },
    {
        rank: 'D',
        margin: 250,
        color: 'orange'
    },
    {
        rank: 'D+',
        margin: 500,
        color: 'orange'
    },
    {
        rank: 'C-',
        margin: 800,
        color: 'gray'
    },
    {
        rank: 'C',
        margin: 1200,
        color: '#444444'
    },
    {
        rank: 'C+',
        margin: 2000,
        color: '#222222'
    },
    {
        rank: 'B-',
        margin: 3500,
        color: '#888800'
    },
    {
        rank: 'B',
        margin: 8000,
        color: '#666600'
    },
    {
        rank: 'B+',
        margin: 20000,
        color: '#663300'
    },
    {
        rank: 'A-',
        margin: 50000,
        color: 'darkblue'
    },
    {
        rank: 'A',
        margin: 100000,
        color: 'blue'
    },
    {
        rank: 'A+',
        margin: 200000,
        color: '#003366'
    },
    {
        rank: 'S-',
        margin: 500000,
        color: 'magenta'
    },
    {
        rank: 'S',
        margin: 1000000,
        color: 'purple'
    }
];
const levelMarginDigit = levelMargins.sort((a,b) => b.margin > a.margin)[0].margin.toString().length;

const getFusionPower = (characterNode, characterList) => {
    let power = characterNode.power;
    if(Array.isArray(power)) {
        power = power.map(id => {
            let node = characterList.find(x => x.id == id);
            return getFusionPower(node, characterList);
        });
        return power.reduce((a,b) => a + b, 0);
    }
    else 
    {
        return power;
    }
}

const getPowerRank = (power) => {
    if(power == null) return 'N/A';
    let rank = 0;
    let maxRank = levelMargins.length;
    for (let i = 0; i < maxRank; i++) {
        if (power > levelMargins[i].margin) {
            rank++;
        } else {
            break;
        }
    }
    if (rank >= maxRank) {
        return 'S+';
    } else {
        return levelMargins[rank].rank;
    }
}

const getPowerColor = (power) => {
    let rank = getPowerRank(power);
    if(rank == 'N/A') return 'black';
    if(rank == 'S+') return 'violet';
    let rankObj = levelMargins.find(x => x.rank == rank);
    if(rankObj != null){
        return rankObj.color;
    } else {
        return 'black';
    }
}

const getPowerPrefixString = () => {
    return "Power: ";
}

const getPowerString = (power) => {
    if(power == null) return 'N/A';
    return power.toString().padStart(levelMarginDigit, '0');
}

const getSemiFullPowerString = (power) => {
    return getPowerString(power) + " [" + getPowerRank(power) + "]";
}