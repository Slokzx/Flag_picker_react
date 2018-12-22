import React, { Component }  from 'react'


class Continents extends Component{
  state={
    selected: false
  }
  keypressChange = (e) =>{
    if(e.key='enter'){
      this.setState({
        selected: true
      })
    }
  }
  render(){
  return (
    <div>
        <datalist id={this.props.data}>
          {this.props.resultsContinents.map((r,i) =>
              <option value={r.continent} key={i} selected={this.state.selected} onKeyPress={this.keypressChange}/>
          )}
        </datalist>
    </div>
  )
}
}

export default Continents