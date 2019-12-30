const users = [{
  name: 'María',
  isPremium: false
},
{
  name: 'Lucía',
  isPremium: true
},
{
  name: 'Susana',
  isPremium: true
},
{
  name: 'Rocío',
  isPremium: false
},
{
  name: 'Inmaculada',
  isPremium: false
},
];

// const welcome = users.map(user => ( console.log(`Bienvenida ${user.name}. Gracias por confiar en nosotros`)));

const welcome = users.map(user => ((user.isPremium === true) ? console.log(`Bienvenida ${user.name}. Gracias por confiar en nosotros`) :
  console.log('Bienvenido usuario')));

