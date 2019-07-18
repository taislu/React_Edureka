import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'

import { globalResetAction } from '../../../actions/globalAlertActions'

function GlobalAlert(props) {
  const { alert } = props

  setTimeout(() => {
    props.resetAlert()
  }, 3000)

  return (
    <Fragment>
      { alert.text && <Alert color={alert.type}>{alert.text}</Alert> }
    </Fragment>
  )
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