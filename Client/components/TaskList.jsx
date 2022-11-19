import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import Task from './Task.jsx'
import AddTask from './AddTask.jsx';
import BikeButton from './bikeButton.jsx';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bikeImg: undefined,
      currentBike: undefined,
      bikes: [],
      tasks: [],
    }
  this.addTask = this.addTask.bind(this);
  this.deleteTask = this.deleteTask.bind(this);
  this.editTask = this.editTask.bind(this);
  this.completeTask = this.completeTask.bind(this);
  this.promptBike = this.promptBike.bind(this);
  this.addBike = this.addBike.bind(this);
  this.changeBike = this.changeBike.bind(this);
  this.deleteBike = this.deleteBike.bind(this);
  }

  componentDidMount() {
    fetch('/api/all')
        .then(res => res.json())
        .then(data => {
            return this.setState({
                ...this.state,
                tasks: data.tasks,
                bikes: data.bikes,
                currentBike: data.bikes[0]
            })
        })
        .then(res => {if (this.state.currentBike !== undefined) {
          let query = `${this.state.currentBike.year}+${this.state.currentBike.make}+${this.state.currentBike.model}`.replace(/\s/g, '+')
          fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAYKIcLqDJPrytgaJBawgXStAISUhf9stE&cx=b5cac7e077796450d&q=${query}`)
            .then(res => res.json())
            .then(data => {
              return this.setState({
                ...this.state,
                bikeImg: data.items[0].pagemap.cse_image[0].src
              })
            })
          }})
        
  }

  async addTask(event) {
    if (this.state.currentBike === undefined) {
      window.alert('You must add a bike first');
      throw new Error('You must add a bike first');
    }
    let task = event.target.previousSibling.previousSibling.previousSibling.value;
    let maint = event.target.previousSibling.previousSibling.lastChild.checked;
    let cost = event.target.previousSibling.value;
    if (cost === '') cost = 0;
    // if (!(/^\d+$/.test(cost))) {
    //   window.alert('Cost must be a number');
    //   throw new Error('Cost must be a number');
    // }
    if (task === '') throw new Error('You must input something into the text field before adding a task. It cannot be left blank');
    cost = Number(cost).toFixed(2);

    await this.setState(prevState => ({
      tasks: prevState.tasks.concat({done: false, maint: maint, task: task, cost: cost})
    }))

    await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          maint: maint,
          task: task,
          cost: cost,
          moto_id: this.state.currentBike._id,
        }
      )
    })
    .catch(err => console.error('error with POST FETCH @ Add Button'))

    fetch('/api/tasks')
        .then(res => res.json())
        .then(data => {
          return this.setState({
            ...this.state,
            tasks: data.tasks,
        })
        })
    
    event.target.previousSibling.previousSibling.previousSibling.value = '';
    event.target.previousSibling.value = '';
    event.target.previousSibling.previousSibling.lastChild.checked = false;
  }

  async deleteTask(event) {

    const id = event.target.parentNode.parentNode.id;
    let index;
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i]._id === id) index = i;
    }

    await this.setState(prevState => ({
      tasks: prevState.tasks.filter(el => {
        return prevState.tasks.indexOf(el) !== index;
      })
    }))

    await fetch('/api', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    })
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.error('error with DELETE FETCH'))
  }

  async editTask(event) {
    let currentTask = event.target.parentNode.previousSibling.previousSibling.previousSibling.textContent;
    let newTask = window.prompt('Edit your task: ', currentTask);
    
    const id = event.target.parentNode.parentNode.id;
    await this.setState(prevState => ({
      tasks: prevState.tasks.map(el => {
        if (el._id === id) {
        return {
          ...el,
          task: newTask,
        }
      }
        else return el;
      })
    }))

    await fetch('/api', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, newTask})
    })
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.error('error with PATCH FETCH'))
  }


  async completeTask(event) {
    let value = event.target.checked;
    const id = event.target.parentNode.parentNode.id;
    
    await this.setState(prevState => ({
      tasks: prevState.tasks.map(el => {
        if (el._id === id) {
        return {
          ...el,
          done: value,
        }
      }
        else return el;
      })
    }))

    await fetch('/api', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, done: value})
    })
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.error('error with PATCH FETCH'))
  }

  async promptBike(event) {
    document.querySelector('#addNewBikeButton').style.display = 'none';
    document.querySelector('.prompt').style.display = 'flex';
  }

  async addBike(event) {
    
    let year = event.target.previousSibling.previousSibling.previousSibling.value;
    let make = event.target.previousSibling.previousSibling.value;
    let model = event.target.previousSibling.value;
    if (year === '' || make === '' || model === '') throw new Error('In order to adda  bike, you must input something for year, make, and model')

    if (!(/^\d+$/.test(year))) {
      window.alert('Year must be a number');
      throw new Error('Year must be a number');
    }

    let bikeObj = {
      year: year,
      make: make,
      model: model
    }

    await this.setState(prevState => ({
      currentBike: bikeObj,
      bikes: prevState.bikes.concat(bikeObj)
    }))

    document.querySelector('.prompt').style.display = 'none';
    document.querySelector('#addNewBikeButton').style.display = 'flex';
    event.target.previousSibling.previousSibling.previousSibling.value = '';
    event.target.previousSibling.previousSibling.value = '';
    event.target.previousSibling.value = '';

    await fetch('/api/bike', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          year: year,
          make: make,
          model: model,
        }
      )   
    })
    .then(res => res.json())
    .then(data => {
      return this.setState({
        ...this.state,
        currentBike: data
      })
    })
    .catch(err => console.error('error with POST FETCH @ Add Button'))

    await fetch('/api/bike')
        .then(res => res.json())
        .then(data => {
          return this.setState({
            ...this.state,
            bikes: data.bikes,
        })
        })
    
    if (this.state.currentBike !== undefined) {
      let query = `${this.state.currentBike.year}+${this.state.currentBike.make}+${this.state.currentBike.model}`.replace(/\s/g, '+')
      fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAYKIcLqDJPrytgaJBawgXStAISUhf9stE&cx=b5cac7e077796450d&q=${query}`)
        .then(res => res.json())
        .then(data => {
          return this.setState({
            ...this.state,
            bikeImg: data.items[0].pagemap.cse_image[0].src
          })
        })
      }
  }

  async changeBike(event) {

    if (event.target.id === this.state.currentBike._id) return;

    else {
      await this.setState(prevState => ({
        currentBike: prevState.bikes.filter(el => {
          return el._id === event.target.id;
        })[0]
      }))
    }

    if (this.state.currentBike !== undefined) {
      let query = `${this.state.currentBike.year}+${this.state.currentBike.make}+${this.state.currentBike.model}`.replace(/\s/g, '+')
      fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAYKIcLqDJPrytgaJBawgXStAISUhf9stE&cx=b5cac7e077796450d&q=${query}`)
        .then(res => res.json())
        .then(data => {
          return this.setState({
            ...this.state,
            bikeImg: data.items[0].pagemap.cse_image[0].src
          })
        })
      }
}

  async deleteBike(event) {
    let confirm = window.confirm(`Current bike: ${this.state.currentBike.year} ${this.state.currentBike.make} ${this.state.currentBike.model}\n \nAre you sure you want to delete this bike?\n \n This will delete all of its tasks as well. This cannot be undone`)

    let id = this.state.currentBike._id

    if (confirm === true) {
      await this.setState(prevState => ({
        currentBike: prevState.bikes.filter(el => {
          return el._id !== prevState.currentBike._id;
        })[0],
        bikes: prevState.bikes.filter(el => {
          return el._id !== prevState.currentBike._id;
        })
      }))
  
      await fetch('/api/bike', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
      })
      .then(data => data.json())
      .then(data => console.log(data))
      .catch(err => console.error('error with DELETE FETCH'))
    }
  }

  render() {
    const tasks = [];
    const completed = [];
    const bikeButtons = [];
    const deleteBike = [];
    const bikeImg = [];
    let activeTasks = 0;
    let completedTasks = 0;
    let totalCost = 0;
    let totalSpent = 0;
    if (this.state.tasks.length === 0) tasks.push(<h2 id='noTasks' key='noTasks'>You don't have any tasks. Add one using the input box above.</h2>)
    
    else if (this.state.currentBike !== undefined) {
      for (let i = 0; i < this.state.tasks.length; i++) {
        let number = -1 - i;
        if (this.state.tasks[i].moto_id === this.state.currentBike._id && this.state.tasks[i].done === false) {
          tasks.push(<Task className='task' number={number} task={this.state.tasks[i]} key={i} deleteTask={this.deleteTask} editTask={this.editTask} completeTask={this.completeTask}/>);
          totalCost += this.state.tasks[i].cost;
          activeTasks++;
        }
        else if (this.state.tasks[i].moto_id === this.state.currentBike._id) {
          completed.push(<Task className='completedTask' number={number} task={this.state.tasks[i]} key={i} deleteTask={this.deleteTask} editTask={this.editTask} completeTask={this.completeTask}/>)
          totalSpent += this.state.tasks[i].cost;
          completedTasks++;
        }
      }
    }

    let currentBikeString = 'Current bike: ';
    if (this.state.currentBike !== undefined) currentBikeString = `Current bike is:  ${this.state.currentBike.year} ${this.state.currentBike.make} ${this.state.currentBike.model}`

    for (let i = 0; i < this.state.bikes.length; i++) {
      let keyString = `${this.state.bikes[i].year}${this.state.bikes[i].make}${this.state.bikes[i].model}`
      bikeButtons.push(<BikeButton key={keyString} thisBike={this.state.bikes[i]} currentBike={this.state.currentBike} id={this.state.bikes[i]._id} changeBike={this.changeBike}/>)
    }

    if (this.state.currentBike !== undefined) {
      deleteBike.push(<button key={deleteBike} id='deleteBike' onClick={this.deleteBike}>Delete Current Bike</button>)
      bikeImg.push(<img id='bikeImg' src={this.state.bikeImg}></img>)
    }

    return(
      <div id='bigContainer'>
        <div className='prompt'>
          <input placeholder='Year'></input>
          <input placeholder='Make'></input>
          <input placeholder='Model'></input>
          <input id='addBikeButton' onClick={this.addBike} type="submit" value='Add Bike'></input>
        </div>
        <div className='bikeButtons'>
          <button className='bikeButton' onClick={this.promptBike} id='addNewBikeButton'>Add New Bike</button>
          {deleteBike}
          <p>{currentBikeString}</p>
          <div id='bikeContainer'>
            {bikeButtons}
          </div>
        </div>
        <AddTask addTask={this.addTask}/>
        <div>
          <p className='stats' id='totalTasks'>Total Incomplete Tasks: {activeTasks}</p>
          <p className='stats' id='totalCost'>Total Cost: $ {Number(totalCost).toFixed(2)}</p>
        </div>
        <div className='columns'>
          <p>Completed?</p>
          <p id='taskName'>Task Name</p>
          <p id='taskType'>Task Type</p>
          <p id='costColumn'>Cost</p>
          <p id='optionsColumn'>Options</p>
        </div>
        <div>
          {tasks}
        </div>
        <hr></hr>
        <div>
          <p className='columns'>Completed Tasks</p>
          <p className='stats' id='totalCompletedTasks'>Total Completed Tasks: {completedTasks}</p>
          <p className='stats'>Total Spent: $ {Number(totalSpent).toFixed(2)}</p>
          <p className='stats'>Uncheck to revert back to incomplete</p>
          {completed}
        </div>
        {bikeImg}
      </div>
    )
  } 
}


export default hot(TaskList);