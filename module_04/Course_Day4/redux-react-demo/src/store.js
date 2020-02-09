import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { counterReducer } from './reducers/counterReducer'
import { evenCounterReducer } from './reducers/evenCounterReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  evenCounter: evenCounterReducer
})

export default createStore(rootReducer, composeWithDevTools())