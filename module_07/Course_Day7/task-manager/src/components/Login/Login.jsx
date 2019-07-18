import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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

import { loginAction, logoutAction } from '../../actions/userActions';

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

  componentDidMount() {
    this.props.logout()
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
      //axios.post('http://localhost:3001/login', data).then()
      if(data.username === 'admin' && data.password === 'admin') {
        this.props.login(data)
        this.props.history.push('/tasks')
      }
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
            <Link to="/register" className="btn btn-success float-right">Register</Link>
          </Form>
        </Col>
      </Row>      
    )
  }
}

export default connect(null, dispatch => ({
  login: (creds) => dispatch(loginAction(creds)),
  logout: () => dispatch(logoutAction())
}))(Login)