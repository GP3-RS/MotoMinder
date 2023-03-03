import React from 'react';
import { hot } from 'react-hot-loader/root';

class BikeButton extends React.Component {
  render() {
    let bikeString = `${this.props.thisBike.year} ${this.props.thisBike.make} ${this.props.thisBike.model}`;
    let classN = 'bikeButton';
    if (this.props.thisBike._id === this.props.currentBike._id) classN = 'currentBike'
    return(
      <div>
        <button className={classN} onClick={this.props.changeBike} id={this.props.id}>{bikeString}</button>
      </div>
    ) 
  } 
}


export default hot(BikeButton);