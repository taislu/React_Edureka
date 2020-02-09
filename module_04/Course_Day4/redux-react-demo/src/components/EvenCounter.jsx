import React, { Fragment, Component } from 'react'

import { evenIncrAction, evenDecrAction, evenResetAction } from '../actions/evenCounterActions'

class EvenCounter extends Component {
  incr = () => {
    this.props.store.dispatch(evenIncrAction())
  }

  decr = () => {
    this.props.store.dispatch(evenDecrAction())
  }

  reset = () => {
    this.props.store.dispatch(evenResetAction())
  }

  render() {
    return (
      <Fragment>
        <h2> Even Counter :: {this.props.store.getState().evenCounter}</h2>
        <button onClick={this.incr}>+</button>
        <button onClick={this.decr}>-</button>
        <button onClick={this.reset}>Reset</button>
      </Fragment>
    )
  }
}

export default EvenCounter