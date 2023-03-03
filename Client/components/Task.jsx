import React from 'react';
import { hot } from 'react-hot-loader/root';

// THIS BREAKS HMR
// import motoController from '../../server/controllers/motoController';

const Task = (props) => {
    let type;
    let flag = props.task.done;
    let completed = [];
    if (flag === false) completed.push(<input key={props.number} onClick={props.completeTask} className='completedRadio' type="checkbox" value="completed"></input>)
    else completed.push(<input key={props.number} onClick={props.completeTask} className='completedRadio' type="checkbox" value="completed" defaultChecked></input>)
    if (props.task.maint) type = 'Maintanence';
    else type = 'Upgrade';
    let cost = Number(props.task.cost).toFixed(2);

    return(
      <div className={props.className} id={props.task._id}>
        <div>
            {completed}
        </div>
        <p className='taskText'>{props.task.task}</p>
        <p className='taskTypeValue'>{type}</p>
        <p className='costValue'>$ {cost}</p>
        <div className='options'>
            <button className='editButton' onClick={props.editTask}>EDIT</button>
            <button className='deleteButton' onClick={props.deleteTask}>DELETE</button>
        </div>
      </div>
    ) 
  } 


export default hot(Task);