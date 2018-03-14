import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestDog } from './../actions';
import { requestDogSuccess } from './../actions';
import { requestDogaError } from './../actions';
import Dog from './../components/Dog';

class Container extends Component {
  handleSelectionDog = (city) => {
    this.props.setCity(city);
  }

  render() {
    return (
      <Dog
        cities = { this.props.cities }
        onSelectedLocation = { this.handleSelectionLocation}>
      </Dog>
    );
  }
}
// esta función nos deja trabajar con las acciones
const mapDispacthToPropsActions = (dispatch) => ({
  requestDog: value => dispatch(requestDogSuccess(value))
});

// connect toma lo que estan haciendo las dos funcionesy lo lleva a app
export default connect(null, mapDispacthToPropsActions)(Container);
