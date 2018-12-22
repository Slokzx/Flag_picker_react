import React, { Component } from 'react'

class Display extends Component{

  state ={
    countries: this.props.countriesSelected
  }

  handleClick =() =>{
    this.setState({ 
      countries: []
    })
  }
  render(){
    return (
      <div>
        <h2>Selected Flags:</h2>
        <div>{this.state.countries}</div>
        <br></br>
        <button onClick={this.handleClick}>Clear Flags</button>
      </div>
    )
  }
}

export default Display
