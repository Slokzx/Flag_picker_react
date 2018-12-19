import React, { Component } from 'react'
import Continents from './Continents'

const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class SearchBox extends Component {
  state = {
    search: '',
    results: []
  }

  getInfo = () => {
    console.log(this.state.search);
    fetch(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.search}&limit=7`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data.data
        })
      })
      .catch(e => console.log("help"))
  }

  handleInputChange = () => {
    this.setState({
      search: this.search.value
    }, () => {
      if (this.state.search && this.state.search.length > 1) {
        if (this.state.search.length % 1 === 0) {
          this.getInfo()
        }
      } else if (!this.state.search) {
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for a continent..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Continents results={this.state.results} />
      </form>
    )
  }
}

export default SearchBox
