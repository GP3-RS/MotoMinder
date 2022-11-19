import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class AddTask extends Component {
  render() {
    return(
      <div className='addTask'>
        <input id='taskInput' placeholder='Input Your Next Maintanence/Upgrade Task Here'></input>
        <label>
          Maintanence?
          <input type="checkbox"></input>
        </label>
        <input id='costInput' placeholder='$ Cost'></input>
        <button id='addButton' onClick={this.props.addTask}>Add</button>
      </div>
    ) 
  } 
}


export default hot(AddTask);