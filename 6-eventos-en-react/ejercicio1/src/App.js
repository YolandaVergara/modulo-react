import React from 'react';
import './App.css';

class App extends React.Component {

  onChangeListener(event) {
    if (event.target.value === 'cebolla') {
      alert('odio a la cebolla');
    };
  }
  render() {
    return (
      <div>
        <textarea onChange={this.onChangeListener}>
        </textarea>
      </div>
    );
  }
}

export default App;
