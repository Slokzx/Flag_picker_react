import React, { Component } from 'react'
import './App.css';
import SearchBox from './Components/SearchBox'
import Countries from './Components/Countries'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Flag Picker</h1>
        <p>This app will help you to learn flags around the world in 3 steps.</p>
        <div className="column"><SearchBox /></div>
        <div className="column"><Countries /></div>
      </div>
    );
  }
}

export default App;
