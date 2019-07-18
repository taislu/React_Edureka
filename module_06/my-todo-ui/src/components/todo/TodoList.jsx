import React, {Fragment} from 'react'
import { ListGroup, Alert } from 'reactstrap'

import TodoItem from './TodoItem'

function TodoList(props) {

    const { todos } = props

    if(todos.length === 0) {
        return <Alert color="info">No Todo Item to Show ...</Alert>
      }

    return (
    <Fragment>
      <h5>[ Todo Items List ]</h5>
      <hr />
      <ListGroup>
        {
          todos.map(t => <TodoItem key={t.id} todo={t} />)          
        }
      </ListGroup>
    </Fragment>
    )
}

export default TodoList
