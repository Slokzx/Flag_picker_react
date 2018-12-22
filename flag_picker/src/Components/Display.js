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
        {this.state.countries.map((r,i)=>{ return(<li key={i}>{r}</li>) })}
        <br></br>
        <button onClick={this.handleClick}>Clear Flags</button>
      </div>
    )
  }
}

export default Display
