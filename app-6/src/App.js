import React, { Component } from 'react';
import Todo from "./Todo"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      list : [],
      tasks: ""
    }
  }
  handleChange(val){
    this.setState({
      tasks: val
    })
  }
  addStuff(){
    this.setState({
      
    })
  }
  render() {
    return (
      <div className="App">
        <Todo />
      </div>
    );
  }
}

export default App;
