import React, { Component } from 'react';
import {callingDog, callingDogReady, callingDogFail } from '../actions/index';
import Counter from './Counter';
// import fetchDog from '../actions'


class Dog extends Component {
  render = () => {
    // Llamado a la api y conexión con las actions
    const fetchDog = (dispatch) => {
      dispatch(callingDog());
      return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(
          data => dispatch(callingDogReady(data)),
          err => dispatch(callingDogFail())
        );
    };
    // console.log(this.props.url)
    return (
      <div>
        <button onClick={() => fetchDog(this.props.dispatch)}>I'm feeling lucky</button>
        {this.props.loading
          ? <p>Loading...</p>
          : this.props.error
            ? <p>Error, try again</p>
            : this.props.url
              ? <div>
                <p><img src={this.props.url} alt=''/></p>
                <Counter/>
              </div>
              : <p></p>}
      </div>
    );
  }
  componentDidMount(){

  }
  componentwillUpdate(){

  }
  componentWillUnmount(){

  }
  componentWillMount(){

  }
}

export default Dog ;
