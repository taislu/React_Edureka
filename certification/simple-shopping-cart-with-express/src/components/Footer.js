import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <div>
      <hr />
      <small>&copy; {props.note}</small>
    </div>
  )
}

Footer.propTypes = {
  note: PropTypes.string.isRequired
}

export default Footer