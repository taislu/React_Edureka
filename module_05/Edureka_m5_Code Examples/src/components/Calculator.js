import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Calculator extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onSquare: PropTypes.func.isRequired,
    onHalf: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired
  }

  render() {
    const { value, onSquare, onHalf, onIncrement } = this.props
    return (
      <p>
        Current Value: {value} 
        {' '}
        <button onClick={onSquare}>
          square
        </button>
        {' '}
        <button onClick={onHalf}>
          half
        </button>  
        {' '}
        <button onClick={onIncrement}>
          increment by 1
        </button>    
      </p>
    )
  }
}

export default Calculator