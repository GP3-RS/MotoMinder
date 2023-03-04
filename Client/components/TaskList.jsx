import React, {useState, useEffect} from 'react';
import { hot } from 'react-hot-loader/root';
import Task from './Task.jsx'
import AddTask from './AddTask.jsx';
import BikeButton from './bikeButton.jsx';

const TaskList = () => {

  const [bikeImg, setImg] = useState('https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif');
  const [currentBike, setCurrentBike] = useState(null);
  const [bikes, setBikes] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imgCache, setImgCache] = useState({});


  useEffect(() => {
    fetch('/api/all')
        .then(res => res.json())
        .then(data => {
          setTasks(data.tasks);
          setBikes(data.bikes);
          setCurrentBike(data.bikes[0]);
        })
  }, [])

  useEffect(async () => {
    setLoading(true);
    if (currentBike) {
      let query = `${currentBike.year}+${currentBike.make}+${currentBike.model}`.replace(/\s/g, '+')
      if (imgCache[query]) setImg(imgCache[query]);
      else await fetch(`/api/BikeImg/${query}`)
        .then(res => res.json())
        .then(img => {
          setImg(img);
          setImgCache({...imgCache, query: img})
        })
        .catch(err => console.log(err.toString()));
      }
    setLoading(false);
  }, [currentBike])

  const addTask = async(event) => {
    if (!currentBike) {
      window.alert('You must add a bike first');
      throw new Error('You must add a bike first');
    }
    let task = event.target.previousSibling.previousSibling.previousSibling.value;
    let maint = event.target.previousSibling.previousSibling.lastChild.checked;
    let cost = event.target.previousSibling.value;
    if (cost === '') cost = 0;
    cost = cost.replace(/\,/g,'');
    cost = cost.split('.');
    if (!cost.every(el => (/^\d+$/.test(el))) || cost.length > 2) {
      window.alert('Cost must be a number with no more than one decimal');
      throw new Error('Cost must be a number');
    }
    cost = cost.join('.');
    if (task === '') throw new Error('You must input something into the text field before adding a task. It cannot be left blank');
    cost = cost.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    setTasks(tasks.concat({done: false, maint, task, cost}))

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
          moto_id: currentBike._id,
        }
      )
    })
    .catch(err => console.error('error with POST FETCH @ Add Button'))

    fetch('/api/tasks')
        .then(res => res.json())
        .then(data => {
          return setTasks(data.tasks)
        })
    
    event.target.previousSibling.previousSibling.previousSibling.value = '';
    event.target.previousSibling.value = '';
    event.target.previousSibling.previousSibling.lastChild.checked = false;
  }

  const deleteTask = async (event) => {

    const id = event.target.parentNode.parentNode.id;
    let index;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i]._id === id) index = i;
    }

    setTasks(tasks.filter(el => {
        return tasks.indexOf(el) !== index;
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

  const editTask = async (event) => {
    let currentTask = event.target.parentNode.previousSibling.previousSibling.previousSibling.textContent;
    let newTask = window.prompt('Edit your task: ', currentTask);
    
    const id = event.target.parentNode.parentNode.id;
 
    setTasks(tasks.map(el => {
      if (el._id === id) {
      return {
        ...el,
        task: newTask,
      }
    }
      else return el;
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


  const completeTask = async (event) => {
    let value = event.target.checked;
    const id = event.target.parentNode.parentNode.id;

    setTasks(tasks.map(el => {
      if (el._id === id) {
      return {
        ...el,
        done: value,
      }
    }
      else return el;
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

  const promptBike = (event) => {
    document.querySelector('#addNewBikeButton').style.display = 'none';
    document.querySelector('.prompt').style.display = 'flex';
  }

  const addBike = async (event) => {
    
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

    setCurrentBike(bikeObj);
    setBikes(bikes.concat(bikeObj));


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
      return setCurrentBike(data);
      })
    .catch(err => console.error('error with POST FETCH @ Add Button'))

    await fetch('/api/bike')
        .then(res => res.json())
        .then(data => {
          return setBikes(data.bikes)
        })
  }

  const changeBike = async (event) => {

    if (event.target.id === currentBike._id) return;

    setCurrentBike(bikes.filter(el => {
      return el._id === event.target.id;
    })[0])
}

  const deleteBike = async (event) => {
    let confirm = window.confirm(`Current bike: ${currentBike.year} ${currentBike.make} ${currentBike.model}\n \nAre you sure you want to delete this bike?\n \n This will delete all of its tasks as well. This cannot be undone`)

    let id = currentBike._id

    if (confirm === true) {
      setCurrentBike(bikes.filter(el => {
        return el._id !== currentBike._id;
      })[0])
      setBikes(bikes.filter(el => {
        return el._id !== currentBike._id;
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

  const tasksArr = [];
  const completedArr = [];
  const bikeButtonsArr = [];
  let activeTasks = 0;
  let completedTasks = 0;
  let totalCost = 0;
  let totalSpent = 0;
  let currentBikeString = 'Current bike: ';

  if (currentBike) {
    for (let i = 0; i < tasks.length; i++) {
      let number = -1 - i;
      if (tasks[i].moto_id === currentBike._id && tasks[i].done === false) {
        tasksArr.push(<Task className='task' number={number} task={tasks[i]} key={i} deleteTask={deleteTask} editTask={editTask} completeTask={completeTask}/>);
        totalCost += tasks[i].cost;
        activeTasks++;
      }
      else if (tasks[i].moto_id === currentBike._id) {
        completedArr.push(<Task className='completedTask' number={number} task={tasks[i]} key={i} deleteTask={deleteTask} editTask={editTask} completeTask={completeTask}/>)
        totalSpent += tasks[i].cost;
        completedTasks++;
      }
    }

    currentBikeString = `Current bike is:  ${currentBike.year} ${currentBike.make} ${currentBike.model}`

    for (let i = 0; i < bikes.length; i++) {
      let keyString = `${bikes[i].year}${bikes[i].make}${bikes[i].model}`
      bikeButtonsArr.push(<BikeButton key={keyString} thisBike={bikes[i]} currentBike={currentBike} id={bikes[i]._id} changeBike={changeBike}/>)
    }
  }

    return(
      <div id='bigContainer'>
        <div className='prompt'>
          <input placeholder='Year'></input>
          <input placeholder='Make'></input>
          <input placeholder='Model'></input>
          <input id='addBikeButton' onClick={addBike} type="submit" value='Add Bike'></input>
        </div>
        <div className='bikeButtons'>
          <button className='bikeButton' onClick={promptBike} id='addNewBikeButton'>Add New Bike</button>
          <button key={deleteBike} id='deleteBike' onClick={deleteBike}>Delete Current Bike</button>
          <p>{currentBikeString}</p>
          <div id='bikeContainer'>
            {bikeButtonsArr}
          </div>
        </div>
        <AddTask addTask={addTask}/>
        <div>
          <p className='stats' id='totalTasks'>Total Incomplete Tasks: {activeTasks}</p>
          <p className='stats' id='totalCost'>Total Cost: $ {totalCost.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        </div>
        <div className='columns'>
          <p>Completed?</p>
          <p id='taskName'>Task Name</p>
          <p id='taskType'>Task Type</p>
          <p id='costColumn'>Cost</p>
          <p id='optionsColumn'>Options</p>
        </div>
        <div>
          {tasks.length ? 
          tasksArr
          : 
          <h2 id='noTasks' key='noTasks'>You don't have any tasks. Add one using the input box above.</h2>}
        </div>
        <hr></hr>
        <div>
          <p className='columns'>Completed Tasks</p>
          <p className='stats' id='totalCompletedTasks'>Total Completed Tasks: {completedTasks}</p>
          <p className='stats'>Total Spent: $ {totalSpent.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          <p className='stats'>Uncheck to revert back to incomplete</p>
          {completedArr}
        </div>
        {loading ? <img className='bikeImg' src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'></img> : <img className='bikeImg' src={bikeImg}></img>}
      </div>
    )
}


export default hot(TaskList);