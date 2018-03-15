import React, { Component } from 'react';
import Header from './components/Header';
import DogContainer from './containers/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className= 'App'>
        <Header/>
        <DogContainer/>
      </div>
    );
  }
}

export default App;
