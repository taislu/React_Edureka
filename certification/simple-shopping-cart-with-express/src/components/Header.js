import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    return(

        <div className="mt-4">
            <h3>{props.title}</h3>
            <hr />
        </div>
        
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
  }

export default Header