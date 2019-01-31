import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Todo = (props) => {
    return(
        <div>
            <input onChange={(e) => this.handleChange(e.target.value)} />
        <button onSubmit={() => this.addStuff()}>Add</button>
        </div>
    )
}

export default Todo;