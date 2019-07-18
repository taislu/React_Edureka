import React, { Component, Fragment } from 'react'

import {Form, FormGroup, Input, Label, Button, Alert} from 'reactstrap'

class TodoForm extends Component{

    state = {
        title: '',
        description: '',
        titleError: ''
    }

    handleChange = (e) => {      
        this.setState({
          //dynamic key
          [e.target.name]: e.target.value
        })    
    }

    handleSubmit=(e)=> {
        e.preventDefault()
        
        const { title, description } = this.state
    
        if(title === '') {
          this.setState({
            titleError: 'Title cannot be blank'
          }) 
        } else {      
          //this.props.add({ title, description })
          //this.props.success('Task Added Successfully!')      
    
          this.setState({
            title: '',
            description: '',
            titleError: ''
          })
        }
      }
    
  
    render(){
        const { title, description, titleError } = this.state

        return (
            <Fragment>
                <h5>Add Todo</h5>
                <hr />
        
                 { titleError && 
                     <Alert id="titleError" color="danger">{titleError}</Alert> }
        
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input id="title" value={title} onChange={this.handleChange} name="title"/>
                    </FormGroup>
            
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="textarea" value={description} id="description" 
                            onChange={this.handleChange} name="description"/>
                    </FormGroup>
            
                    <Button type="submit" color="primary">Add</Button>
                </Form>
            </Fragment>
        )
    }
}

export default TodoForm