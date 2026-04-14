import React from 'react'
import Header from '../../PageComponents.jsx/Header'
import TaskListNumber from '../../PageComponents.jsx/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
      <Header/>
      <TaskListNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
