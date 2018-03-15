import { connect } from 'react-redux';
import Dog from './../components/Dog';

const DogContainer = connect((state) => {
  // console.log(state);
  return state;
})(Dog);

export default DogContainer;
