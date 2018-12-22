import React, { Component } from 'react'

class Countries extends Component{
  state = {
    country:[],
    pickedContinent: []
  }

  handleInputChange = () => { 
    var updatedList = this.props.list;
    updatedList = updatedList.filter((item) =>{
      return item.continent === this.props.selected;
      })
    this.setState({ pickedContinent: updatedList[0].countries })
    }
  
  handleChange = (event) =>{
    if(this.state.country.includes(event.target.id)){
      let i = this.state.country.indexOf(event.target.id)
      this.state.country.splice(i,1)
    }
    else {
      this.state.country.push(event.target.id);
    }
    this.props.selectedCountries(this.state.country)
  }

  render(){
    return (
        <form>
          <h2> Step 2 </h2>
          <p> Now, select a country. </p>
          <input onFocus={this.handleInputChange} />
          <ul>
            {this.state.pickedContinent.map((r,i) =>
              <li style={{ width: "12em", textAlign: "left", overflow: "auto"}}>
                <input type="checkbox" id={r.flag} onChange={this.handleChange}/>{r.name}
              </li>  
            )}
          </ul>
        </form>
    )
  }
}

export default Countries