import React, { Fragment, Component } from 'react'

import { incrAction, decrAction, resetAction } from '../actions/counterActions'

class Counter extends Component {
  incr = () => {
    this.props.store.dispatch(incrAction())    
  }

  decr = () => {
    this.props.store.dispatch(decrAction())
  }

  reset = () => {
    this.props.store.dispatch(resetAction())
  }

  render() {    
    return (
      <Fragment>
        <h2> Counter :: {this.props.store.getState().counter}</h2>
        <button onClick={this.incr}>+</button>
        <button onClick={this.decr}>-</button>
        <button onClick={this.reset}>Reset</button>
      </Fragment>
    )
  }
}

export default Counter