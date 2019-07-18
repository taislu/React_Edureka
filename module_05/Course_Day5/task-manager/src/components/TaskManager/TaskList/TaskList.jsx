import React, { Fragment } from 'react'
import { ListGroup, Alert } from 'reactstrap'
import { connect } from 'react-redux'

import TaskItem from './TaskItem/TaskItem.jsx'

function TaskList(props) { 
  const { tasks } = props
  
  if(tasks.length === 0) {
    return <Alert color="info">No Tasks to Show.</Alert>
  }

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

function mapStateToProps(state) { //store.getState()
  return {
    tasks: state.tasks            //store.getState().tasks
  }
}

export default connect(mapStateToProps)(TaskList)