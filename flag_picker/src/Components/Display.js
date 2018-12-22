import React, { Component } from 'react'

class Display extends Component{

  state ={
    countries: this.props.countriesSelected
  }

  render(){
    return (
      <div>
        {this.props.countriesSelected}
      </div>
    )
  }
}

export default Display
