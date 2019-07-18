import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './header.css'

function Header(props) {
  return (
    <div className="mt-4">
      <h1>Task Manager</h1>
      {props.user && <Link className="btn btn-danger float-right" to="/login">Logout</Link> }
      <div className="clearfix"></div>
      <hr />
    </div>
  )
}

export default connect(({ user }) => ({ user }))(Header)