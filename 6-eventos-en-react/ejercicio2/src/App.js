import React from 'react';
import './App.css';

class App extends React.Component {
  // constructor(props) {
  // }
  onChangeListener(event) {
    alert(`Tu destino es viajar a ${event.target.value}, siendo ${event.target.value} la ciudad seleccionada`);
  }
  render() {
    return (
      <select onChange={this.onChangeListener} name="cities" form="cities">
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sidney">Sidney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    );
  }
}

export default App;
