import React from 'react';
import { hot } from 'react-hot-loader/root';

const AddTask = (props) => {
    return(
      <div className='addTask'>
        <input id='taskInput' placeholder='Input Your Next Maintanence/Upgrade Task Here'></input>
        <label>
          Maintanence?
          <input type="checkbox"></input>
        </label>
        <input id='costInput' placeholder='$ Cost'></input>
        <button id='addButton' onClick={props.addTask}>Add</button>
      </div>
    ) 
  } 


export default hot(AddTask);