const runners = [{
        name: 'Gregory Goyle',
        time: 56,
        student: true
    },
    {
        name: 'Nymphadora Tonks',
        time: 9,
        student: false
    },
    {
        name: 'Luna Lovegood',
        time: 45,
        student: true
    },
    {
        name: 'Cedric Diggory',
        time: 28,
        student: true
    },
    {
        name: 'Cho Chang',
        time: 35,
        student: true
    },
];

const isStudent = runners.reduce((acc, runner) => (runner.student === true && runner.time < acc.time) ? acc = runner : acc);
console.log(isStudent);