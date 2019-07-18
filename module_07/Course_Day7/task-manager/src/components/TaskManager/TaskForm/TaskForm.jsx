import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Alert
} from 'reactstrap'

import { addTaskAction } from '../../../actions/taskActions'
import { globalSuccessAction } from '../../../actions/globalAlertActions'

class TaskForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      titleError: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {      
    this.setState({
      [e.target.name]: e.target.value
    })    
  }

  handleSubmit(e) {
    e.preventDefault()
    
    const { title, description } = this.state

    if(title === '') {
      this.setState({
        titleError: 'Title cannot be blank'
      }) 
    } else {      
      this.props.add({ title, description })
      this.props.success('Task Added Successfully!')      

      this.setState({
        title: '',
        description: '',
        titleError: ''
      })
    }
  }

  render() {    
    const { title, description, titleError } = this.state

    return (
      <Fragment>
        <h2>Add Task</h2>
        <hr />
  
       { titleError && <Alert id="titleError" color="danger">{titleError}</Alert> }
  
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input id="title" value={title} onChange={this.handleChange} name="title"/>
          </FormGroup>
  
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" value={description} id="description" onChange={this.handleChange} name="description"/>
          </FormGroup>
  
          <Button type="submit" color="primary">Add</Button>
        </Form>
      </Fragment>
    )
  }  
}

function mapDispatchToProps(dispatch) { //store.dispatch
  return {
    add: (formData) => {
      dispatch(addTaskAction(formData))
    },
    success: (text) => {
      dispatch(globalSuccessAction(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(TaskForm)