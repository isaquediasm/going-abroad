import React, { Component } from 'react';
import CardList from './components/CardList';
import logo from './logo.svg';
import data from './data.js';
import './App.css';

class App extends Component {
  render() {
    console.log(data);
    return (
      <div className="app">
        <div className="app__header">
        </div>
        <div className="content">
          <div className="map">
          <CardList items={data}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
