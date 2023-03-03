import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

// THIS BREAKS HMR
// import motoController from '../../server/controllers/motoController';

class Task extends React.Component {
  render() {
    let type;
    let flag = this.props.task.done;
    let completed = [];
    if (flag === false) completed.push(<input key={this.props.number} onClick={this.props.completeTask} className='completedRadio' type="checkbox" value="completed"></input>)
    else completed.push(<input key={this.props.number} onClick={this.props.completeTask} className='completedRadio' type="checkbox" value="completed" defaultChecked></input>)
    if (this.props.task.maint) type = 'Maintanence';
    else type = 'Upgrade';
    let cost = Number(this.props.task.cost).toFixed(2);
    return(
      <div className={this.props.className} id={this.props.task._id}>
        <div>
            {completed}
        </div>
        <p className='taskText'>{this.props.task.task}</p>
        <p className='taskTypeValue'>{type}</p>
        <p className='costValue'>$ {cost}</p>
        <div className='options'>
            <button className='editButton' onClick={this.props.editTask}>EDIT</button>
            <button className='deleteButton' onClick={this.props.deleteTask}>DELETE</button>
        </div>
      </div>
    ) 
  } 
}


export default hot(Task);