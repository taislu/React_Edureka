import React from 'react';
import './App.css'

import Counter from './components/Counter.jsx'
import EvenCounter from './components/EvenCounter.jsx'

function App(props) {
  return (
    <div className="App">
      <Counter store={props.store}/>
      <hr />
      <EvenCounter store={props.store} />
    </div>
  );
}

export default App;
