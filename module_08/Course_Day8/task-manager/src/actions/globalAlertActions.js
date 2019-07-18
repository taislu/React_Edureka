import { G_RESET, G_SUCCESS, G_WARN, G_ERROR, G_INFO } from '../utils/actionTypes'

export function globalResetAction() {
  return {
    type: G_RESET
  }
}

export function globalSuccessAction(text) {
  return {
    type: G_SUCCESS,
    text
  }
}

export function globalWarnAction(text) {
  return {
    type: G_WARN,
    text
  }
}

export function globalInfoAction(text) {
  return {
    type: G_INFO,
    text
  }
}

export function globalErrorAction(text) {
  return {
    type: G_ERROR,
    text
  }
}