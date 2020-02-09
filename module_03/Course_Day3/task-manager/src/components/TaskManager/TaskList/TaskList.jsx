import React, { Fragment } from 'react'
import { ListGroup } from 'reactstrap'

import TaskItem from './TaskItem/TaskItem.jsx'

function TaskList(props) { 
  const { tasks } = props
  
  return (
    <Fragment>
      <h2>Your Tasks for Today</h2>
      <hr />
      <ListGroup>
        {
          tasks.map(t => <TaskItem key={t.id} task={t} />)          
        }
      </ListGroup>
    </Fragment>
  )
}

export default TaskList