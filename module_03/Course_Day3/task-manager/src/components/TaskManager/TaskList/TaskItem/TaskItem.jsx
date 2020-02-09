import React from 'react'
import { ListGroupItem, Button } from 'reactstrap'

function TaskItem(props) {  
  const { task } = props
  return (
    <ListGroupItem>
      {task.title}
      <Button close/>
    </ListGroupItem>
  )
}

export default TaskItem