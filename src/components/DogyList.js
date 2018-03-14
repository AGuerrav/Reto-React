// componente funcional por eso no tiene {component}
import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';


const DogyList = ({ dogies, onSelectedDogy }) => {
  const handlerDogClick = (dogy) => {
    console.log('handlerDogClick');
    onSelectedDogy(dogy);
  };
  const strToComponents = (dogies) => (
    dogies.map(dogy => (
      <Dog
        key = { dogy }
        dogy = { dogy }
        onDogClick = {
          () =>
            handlerDogClick(dogy)
        }
      />
    ))
  );
  return (
    <div className='dogyList'>
  		{strToComponents(dogies)}
  	</div>
  );
};

DogyList.propTypes = {
  // dogies : PropTypes.array.isRequired,
  onSelectedDogy: PropTypes.func,
};


export default DogyList;
