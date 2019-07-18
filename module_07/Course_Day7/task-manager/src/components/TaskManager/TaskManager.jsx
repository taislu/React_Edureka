import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'

import TaskForm from './TaskForm/TaskForm.jsx'
import TaskList from './TaskList/TaskList.jsx'

function TaskManager(props) {
  return (
    <Fragment>
      
      <Row>
        <Col>
          <TaskForm />
        </Col>

        <Col>
          <TaskList />
        </Col>
      </Row>
    </Fragment>    
  )
}

export default TaskManager