import React, { Fragment } from 'react'
import { ListGroup } from 'reactstrap'

import TaskItem from './TaskItem/TaskItem.jsx'

function TaskList(props) {
  return (
    <Fragment>
      <h2>Your Tasks for Today</h2>
      <hr />
      <ListGroup>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </ListGroup>
    </Fragment>
  )
}

export default TaskList