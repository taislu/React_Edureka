import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
    return (
        <div className="mt-4">
            <h1>{props.title}</h1>
            <hr />
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header


