import React, { Component } from 'react';
import Header from './components/Header';
import ConnectedDog from './containers/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className= 'App'>
        <Header/>
        <ConnectedDog/>
    </div>

    );
  }
}

export default App;
