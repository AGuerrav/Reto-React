import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component

class Dog extends Component {
  constructor({dogy}) {
    super();
    this.state = {
      dogy,
      data: null
    };
    console.log('constructor');
  }
  componentWillMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(data => {
        return data.json();
      }).then(dataDog => {
        console.log(dataDog);
        this.setState({dataDog});
      });
  }
  render= () => {
    const { onDogClick } = this.props;
    return (
      <div>
        <button onClick={onDogClick}>Show Dog</button>
        {this.props.loading
          ? <p>Loading...</p>
          : this.props.error
            ? <p>Error, try again</p>
            : <p><img src={this.props.url} alt=''/></p>}
      </div>
    );
  }
}

Dog.propTypes = {
  onDogClick: PropTypes.func
};

export default Dog;
