import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
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
      <div className= 'dogContainer'>
        <button className='found' onClick={() => fetchDog(this.props.dispatch)}><i class="material-icons">touch_app</i>Descubre!</button>
        {this.props.loading
          ? <div><CircularProgress size={80} thickness={5} /></div>
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
  componentDidMount() {

  }
  componentwillUpdate() {

  }
  componentWillUnmount() {

  }
  componentWillMount() {

  }
}

export default Dog ;
