<<<<<<< HEAD
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
=======
import React, { Component } from "react";
import MapContainer from "./MapContainer";

import "./App.css";

const data = [
  {
    name: "Buenos Aires",
    title: "Buenos Aires",
    lat: -34.603722,
    lng: -58.381592,
    cases_number: 25,
    disease: "Dengue",
    id: 1
  }
];

const CityList = props => {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => {
          return (
            <li key={index} onClick={e => props.onClick(e, item)}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

class App extends Component {
  state = {
    selectedItem: { 
      lat: 0, 
      lng: 0, 
      boolselect: false
    }
  };

  showInfo(e, selectedItem) {
    selectedItem["boolselect"] = true;
    this.setState({ selectedItem: selectedItem });
  }

  render() {
    return (
      <div>
        <CityList items={data} onClick={this.showInfo.bind(this)} />
        <MapContainer
          center={{ lat: -34.603722, lng: -58.381592 }}
          zoom={5}
          data={data}
          selectedItem={this.state.selectedItem}
        />
>>>>>>> 504ba8f13c7ab6588af437c7638728c96a32a4c8
      </div>
    );
  }
}
<<<<<<< HEAD

export default App;
=======
export default App;
>>>>>>> 504ba8f13c7ab6588af437c7638728c96a32a4c8
