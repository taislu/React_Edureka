import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroupItem, Button } from 'reactstrap'

import { removeTaskAction } from '../../../../actions/taskActions'

function TaskItem(props) {  
  const { task } = props

  return (
    <ListGroupItem>
      <Link to={'/tasks/' + task.id}>{task.title}</Link>
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