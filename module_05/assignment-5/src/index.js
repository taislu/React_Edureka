import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import Calculator from './components/Calculator'
import calculatorReducer from './reducers/calculatorReducer'

import './index.css';

const store = createStore(calculatorReducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Calculator
    value={store.getState()}
    onSquare={() => store.dispatch({ type: 'SQUARE' })}
    onDouble={() => store.dispatch({ type: 'DOUBLE' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    //onHalf={() => store.dispatch({ type: 'HALF' })}
    //onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)


