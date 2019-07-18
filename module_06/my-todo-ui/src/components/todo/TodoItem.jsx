import React from 'react'
import { ListGroupItem, Button } from 'reactstrap'

function TodoItem(props) {

    const { todo } = props

    return (
        <ListGroupItem>
            {todo.title}
            {/* 
                <Button onClick={() => { props.remove(task.id) }} close/>
            */}
            <Button close/>
        </ListGroupItem>
    )
}

export default TodoItem
