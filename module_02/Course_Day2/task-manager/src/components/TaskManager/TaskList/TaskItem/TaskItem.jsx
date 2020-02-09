import React from 'react'
import { ListGroupItem, Button } from 'reactstrap'

function TaskItem(props) {
  return (
    <ListGroupItem>
      Task 1
      <Button close/>
    </ListGroupItem>
  )
}

export default TaskItem