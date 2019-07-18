import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

function UserRoute(props) {  
  if(props.user) {
    return <Route {...props} />
  } else {
    return <Redirect to="/login" />
  }
}

export default connect(
  ({ user }) => ({ user })
)(UserRoute)