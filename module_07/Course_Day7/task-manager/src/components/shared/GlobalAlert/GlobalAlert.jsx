import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'

import { globalResetAction } from '../../../actions/globalAlertActions'

class GlobalAlert extends Component { 
  componentDidUpdate() {
    if(typeof this.props.alert.text !== 'undefined') {
      setTimeout(() => {
        this.props.resetAlert()
      }, 3000)
    }    
  }

  // shouldComponentUpdate() {    
  //   return (typeof this.props.alert.text !== 'undefined')    
  // }

  render() {
    const { alert } = this.props

    return (
      <Fragment>
        { alert.text && <Alert color={alert.type}>{alert.text}</Alert> }
      </Fragment>
    )
  }  
}

function mapStateToProps(state) {
  return {
    alert: state.globalAlert
  }
}

function mapDispatchToProps(dispatch) {
  return {
    resetAlert: () => {
      dispatch(globalResetAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalAlert)