import React, { Component } from 'react'
import './App.css';
import SearchBox from './Components/SearchBox'
import Countries from './Components/Countries'

class App extends Component {
  state ={
    continents: [],
    continentSelected:''
  }

  fromContinent = (data) =>{
    this.setState({
      continentSelected: data
    })
  }

  listContinents= (list) =>{
    this.setState({
      continents: list
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Flag Picker</h1>
        <h2>This app will help you to learn flags around the world in 3 steps.</h2>
        <br></br>
        <div className="column">
          <SearchBox  selectedContinent={this.fromContinent} 
            listContinents={this.listContinents} />
        </div>
        { this.state.continentSelected && 
            <div className="column">
                <Countries selected={this.state.continentSelected} 
                list={this.state.continents} />
            </div> 
        } 
      </div>
    );
  }
}

export default App;
