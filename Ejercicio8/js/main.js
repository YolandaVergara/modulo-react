const runners = [{
        name: 'Gregory Goyle',
        time: 56
    },
    {
        name: 'Nymphadora Tonks',
        time: 9
    },
    {
        name: 'Luna Lovegood',
        time: 45
    },
    {
        name: 'Cedric Diggory',
        time: 28
    },
    {
        name: 'Cho Chang',
        time: 35
    },
];

const winners = runners.reduce((acc, winner) => (acc.time < winner.time) ?
    winner : acc, );

console.log(winners);