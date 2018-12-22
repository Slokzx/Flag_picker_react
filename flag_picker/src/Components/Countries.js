import React, { Component } from 'react'

class Countries extends Component{
  state = {
    pickedContinent: []
  }

  handleInputChange = () => { 
    var updatedList = this.props.list;
    updatedList = updatedList.filter((item) =>{
      return item.continent === this.props.selected;
      })
    this.setState({ pickedContinent: updatedList[0].countries })
    }

  render(){
    return (
      <div>
          <form>
            <input
              placeholder="Select a country..."
              ref={input => this.search = input}
              onFocus={this.handleInputChange}
              onChange={this.handleChange}
              list= "dropbox"
            />
            <ul id="dropbox">
              {this.state.pickedContinent.map((r,i) =>
                <li style={{ width: "12em", textAlign: "left", overflow: "auto"}}>
                  <input type="checkbox" />{r.name}
                </li>  
              )}
            </ul>
          </form>
      </div>
    )
  }
}

export default Countries