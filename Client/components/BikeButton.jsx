import React from 'react';
import { hot } from 'react-hot-loader/root';

const BikeButton = (props) => {
    let bikeString = `${props.thisBike.year} ${props.thisBike.make} ${props.thisBike.model}`;
    let classN = 'bikeButton';
    if (props.thisBike._id === props.currentBike._id) classN = 'currentBike'
    return(
      <div>
        <button className={classN} onClick={props.changeBike} id={props.id}>{bikeString}</button>
      </div>
    ) 
  } 


export default hot(BikeButton);