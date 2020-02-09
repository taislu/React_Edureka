import React, { Fragment } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap'

function TaskForm(props) {
  return (
    <Fragment>
      <h2>Add Task</h2>
      <hr />
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input id="title" />
        </FormGroup>

        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="textarea" id="description" />
        </FormGroup>

        <Button type="submit" color="primary">Add</Button>
      </Form>
    </Fragment>
  )
}

export default TaskForm