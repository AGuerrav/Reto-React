import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestDog } from './../actions';
import { requestDogSuccess } from './../actions';
import { requestDogError } from './../actions';
import DogyList from './../components/DogList';

class Container extends Component {
  handleSelectionDog = (dogy) => {
    this.props.requestDogSuccess(dogy);
    this.props.requestDog(dogy);
    this.props.requestDogError(dogy);
  }
  render() {
    return (
      <DogyList
        onSelectedDogy = { this.handleSelectionDog}>
      </DogyList>
    );
  }
}
// esta función nos deja trabajar con las acciones
const mapDispacthToPropsActions = (dispatch) => ({
  requestDog: value => dispatch(requestDog(value)),
  requestDogSuccess: data => dispatch(requestDogSuccess(data)),
  requestDogError: value => dispatch(requestDogError(value))
});

// connect toma lo que estan haciendo las dos funcionesy lo lleva a app
export default connect(null, mapDispacthToPropsActions)(Container);
