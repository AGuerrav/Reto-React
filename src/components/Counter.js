import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleCountClick = this.handleCountClick.bind(this);
  }
  componentDidMount() {
    // para ver si el componente ya cargó y setiar un valor random
    const rand = Math.floor(Math.random() * 1000);
    this.setState({ count: this.state.count + rand });
  }
  handleCountClick(event) {
    if (event.target.id === 'add') {
      this.setState({
        count: this.state.count + 1
      });
    }
  }
  render() {
    return (
      <div className="Counter">
        <span><h2 className= 'like'>{this.state.count}</h2><button id="add" onClick={this.handleCountClick}>Like</button></span>
      </div>
    );
  }
}

export default Counter;
