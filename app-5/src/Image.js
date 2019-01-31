import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Image extends Component {
  render() {
    return (
      <div className="App">
        <img src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/selena-gomez-attends-the-photo-call-for-sony-pictures-hotel-news-photo-944824964-1547141912.jpg" />
      </div>
    );
  }
}

export default Image;