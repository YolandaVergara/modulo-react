import React from 'react';
import ItemList from './ItemList';
const items =
  [{
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5
  },
  {
    name: "Chocolate",
    description: "Chocolate Belga",
    quantity: 4,
    category: "Fake-Food",
    price: 6
  }
  ];


function App() {

  const expensives = items.filter(function (item) {
    return item.price > 10;
  });

  const cheaper = items.filter(function (item) {
    return item.price <= 10;
  });
  
  return (
    <div>
      <h1>Lista  de la compra</h1>
      <ItemList items={items} />

      <h2>Los alimentos con coste mayor a 10€</h2>
      <ItemList items={expensives} />

      <h2>Los alimenos con coste menor a 10€</h2>
      <ItemList items={cheaper} />
    </div>
  );
}



export default App;