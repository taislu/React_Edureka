import React, { Component } from 'react'
import {
  Form,
  Label,
  FormGroup,
  FormFeedback,
  Input,
  Button,
  Row,
  Col
} from 'reactstrap'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        username: '',
        password: ''
      },
      errors: {}
    }
  }

  validate = () => {
    const { data } = this.state
    let errors = {}

    if(data.username === '') errors.username = 'Username can not be blank.'
    if(data.password === '') errors.password = 'Password can not be blank.'

    return errors
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { data } = this.state
    const errors = this.validate()

    if(Object.keys(errors).length === 0) {
      console.log(data)
    } else {
      this.setState({
        errors
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: ''
      }
    })
  }

  render() {
    const { data, errors } = this.state

    return (
      <Row>
        <Col md={4}>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input id="username" name="username" value={data.username} invalid={errors.username ? true : false} onChange={this.handleChange} />
              <FormFeedback>{errors.username}</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" id="password" name="password" value={data.password} invalid={errors.password ? true : false } onChange={this.handleChange} />
              <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>

            <Button type="submit" color="primary">Login</Button>
          </Form>
        </Col>
      </Row>      
    )
  }
}

export default Login