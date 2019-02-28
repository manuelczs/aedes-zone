import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Provinces from'./Provinces';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Aedes Zone
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Provinces/>
        </header>
      </div>
    );
  }
}

export default App;
