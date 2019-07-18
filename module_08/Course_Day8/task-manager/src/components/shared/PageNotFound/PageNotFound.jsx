import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound(props) {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <Link to="/">Go back to Home</Link>
    </div>
  )
}

export default PageNotFound