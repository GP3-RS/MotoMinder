import { hot } from 'react-hot-loader/root';
import './stylesheets/styles.scss'
import React from 'react';
import TaskList from './components/TaskList'

const App = () => {
    return (
      <div className="mainDiv">
        <h1>Motorcycle Maintanence and Upgrades</h1>
        <TaskList />
      </div>
    )
  }


export default hot(App) ;