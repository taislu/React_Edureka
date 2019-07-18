import { combineReducers } from 'redux'
import { taskReducer } from './taskReducer'
import { globalAlertReducer } from './globalAlertReducer'

export default combineReducers({
  tasks: taskReducer,
  globalAlert: globalAlertReducer
})