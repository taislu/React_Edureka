import { G_RESET, G_SUCCESS, G_ERROR } from '../utils/actionTypes'

export function globalAlertReducer(state={}, action) {
  switch(action.type) {
    case G_RESET:
      return {}
      
    case G_SUCCESS:
      return {
        type: 'success',
        text: action.text
      }

    case G_ERROR:
      return {
        type: 'danger',
        text: action.text
      }
     
    default:
      return state
  }
}