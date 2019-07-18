import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, CardText, CardBody, CardTitle, Alert } from 'reactstrap'
import { baseUrl } from '../../../config/api';

class TaskDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: null,
      msg: ''
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    
    this.setState({
      msg: 'Loading...'
    })

    axios.get(baseUrl + '/tasks/' + id)
      .then(result => result.data)
      .then(task => this.setState({ task, msg: '' }))
      .catch(err => this.setState({ msg: 'No Task Found.' }))
  }

  render() {
    const { task, msg } = this.state

    if(!task) {
      return <Alert color="info">{msg}</Alert>
    }

    return (
      <Card>
        <CardBody>
          <CardTitle><h3>{task.title}</h3></CardTitle>
          <CardText>{task.description}</CardText>
          <Link to="/tasks">Back To Tasks</Link>
        </CardBody>
      </Card>
    )
  }
}

export default TaskDetail