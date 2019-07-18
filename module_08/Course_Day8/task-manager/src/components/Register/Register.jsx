import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
  render() {
    return (
      <Fragment>
        <h2>Register Works!</h2>
        <Link to="/login" className="btn btn-primary">Back to Login</Link>
      </Fragment>
    )
  }
}

export default Register