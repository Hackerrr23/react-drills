import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  showUsername(user){
    this.setState({
      username: user
    })
  }
  showPassword(pass){
    this.setState({
      username: pass
    })
  }
  messageAlert(){
    window.alert(`the user name is ${this.state.username} and the password is${this.state.password}`)
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.showUsername(e.target.value)} />
        <input onChange={(e) => this.showPassword(e.target.value)} />
        <button onClick={() =>this.messageAlert()} />
      </div>
    );
  }
}

export default App;
