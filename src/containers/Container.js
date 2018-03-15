import { connect } from 'react-redux';
import Dog from './../components/Dog';

const ConnectedDog = connect((state) => {
  console.log(state);
  return state;
})(Dog);

export default ConnectedDog;
