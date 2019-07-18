import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'
import PropTypes from 'prop-types'

import { globalResetAction } from '../actions/actions'

export const GlobalAlertContainer = (props) => {
  const { alert, resetAlert } = props

  if (alert.text){
    setTimeout(() => {
        resetAlert()
      }, 3000)
  }
  
  return (
    <Fragment>
      { alert.text && <Alert color={alert.type}>{alert.text}</Alert> }
    </Fragment>
  )
}

GlobalAlertContainer.propTypes = {
  alert: PropTypes.object,
  resetAlert: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    alert: state.globalAlert
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetAlert: () => {
      dispatch(globalResetAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalAlertContainer)
