import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeInfo from './EarthquakeInfo.js';
import EarthquakeList from './EarthquakeList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">Earthquakes!</div>

        </div>
        <EarthquakeInfo />
        <EarthquakeList />

      </div>
    );
  }
}

export default App;
