import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ title, children }) => (
  <div>
    <h5>{title}</h5>
    <hr />
    <div>{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
