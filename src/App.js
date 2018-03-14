import React, { Component } from 'react';
import Header from './components/Header';
import Dog from './components/Dog';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dog />
      </div>
    );
  }
}

export default App;
