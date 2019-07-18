import React from 'react'
import { Row, Col } from "reactstrap";

import TodoList from './TodoList'
import TodoForm from './TodoForm'

import Todo from './Todo'

function TodoApp() {

    const testTodos = [
        new Todo(1, "todo-1"),
        new Todo(2, "todo-2")
    ]

    return (
    <Row>
      <Col>
        {/* <h1>COL-1</h1> */}
        <TodoForm />
      </Col>

      <Col>
        {/* <h1>COL-2</h1> */}
        <TodoList todos={testTodos} />
      </Col>
    </Row>
        
    )
}

export default TodoApp
