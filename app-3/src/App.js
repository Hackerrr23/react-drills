import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [
        "Step Brothers", "The Other Guys", "Taladega Nights", "Blades of Glory"
      ],
      filtered: ""
    }
  }
  handleChange(val){
    this.setState({
      mapped: this.state.mappedArray,
      filtered: val
    })
  }
  

  render() {
      
    let foodsToDisplay = this.state.movies.filter( (element, index) => {
      return element.includes( this.state.filtered);
    }).map( (element, index) => {
      return <h2 key={ index }>{ element }</h2>
    })

    return (
      <div className="App">
       <input onChange={(e) => this.handleChange(e.target.value)} />
        <h2>{foodsToDisplay} </h2>
      </div>
    );
  }
}

export default App;
