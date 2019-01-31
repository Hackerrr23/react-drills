import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      foods: [
        "cookies", "pizza", "brocoli", "chicken nuggets omg", "love"
      ]
    }
  }

  render() { 
    let foodsToShow = this.state.foods.map((e,i) => {
      return <h2 key={i}> {e} </h2>
    })
     
    return (
      <div className="App">
        {foodsToShow}
      </div>
    );
  }
}

export default App;
