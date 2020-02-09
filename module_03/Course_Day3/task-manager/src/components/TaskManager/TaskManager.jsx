import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

import Task from '../../models/Task'

import TaskForm from './TaskForm/TaskForm.jsx'
import TaskList from './TaskList/TaskList.jsx'

class TaskManager extends Component {
  state = {
    tasks: [
      new Task(1, 'Learn React'),
      new Task(2, 'Learn Redux'),
      new Task(3, 'Learn NodeJS'),
      new Task(4, 'Learn MongoDB')
    ]
  }  

  addTask = (data) => {
    const newTask = new Task(
      this.state.tasks.length + 1,
      data.title,
      data.description
    )

    this.setState({
      tasks: [
        ...this.state.tasks,
        newTask
      ]
    })
  }

  render() {
    const { tasks } = this.state

    return (
      <Row>
        <Col>
          <TaskForm add={this.addTask}/>
        </Col>
  
        <Col>
          <TaskList tasks={tasks}/>
        </Col>
      </Row>
    )
  }
}

export default TaskManager