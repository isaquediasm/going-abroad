import React, { Component } from 'react';
import CardList from './components/CardList';
import OffersMap from './components/OffersMap';
import data from './data.js';
import GoogleMapReact from 'google-map-react';
import './App.css';

class App extends Component {
  render() {
    console.log(data);
    return (
      <div className="app">
        <div className="content">
          <CardList data={data} />
          <OffersMap data={data} />
        </div>
      </div>
    );
  }
}

export default App;
