import React from 'react'
import { connect } from 'react-redux'
import { ListGroupItem, Button } from 'reactstrap'

import { removeTaskAction } from '../../../../actions/taskActions'

function TaskItem(props) {  
  const { task } = props

  return (
    <ListGroupItem>
      {task.title}
      <Button onClick={() => { props.remove(task.id) }} close/>
    </ListGroupItem>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    remove: (id) => {
      dispatch(removeTaskAction(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(TaskItem)