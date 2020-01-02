import React from 'react';
import '../App.css';
import ReactDOM from 'react-dom';
import HalfPage from './HalfPage';

function App(props) {
  return (
    <div className="App">
      <HalfPage style="half-left">
        <h1 className="title">Mitad izquierda de la panalla</h1>
      </HalfPage>
      <HalfPage style="half-right">
        <h1 className="title">Mitad derecha de la panalla</h1>
      </HalfPage>
    </div>
  );
}

export default App;
