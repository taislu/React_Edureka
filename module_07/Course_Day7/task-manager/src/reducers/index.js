import { combineReducers } from 'redux'
import { taskReducer } from './taskReducer'
import { globalAlertReducer } from './globalAlertReducer'
import { userReducer } from './userReducer'

export default combineReducers({
  tasks: taskReducer,
  globalAlert: globalAlertReducer,
  user: userReducer
})