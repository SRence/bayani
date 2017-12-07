import React, { Component } from 'react';
import logo from './idol.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>

          <h1 className="App-title">NATIONAL HEROES</h1>
        </header>
        <p className="App-intro">
      	<h2>Who is The Hero In Your country?</h2>
        </p>
      </div>
    );
  }
}

export default App;
