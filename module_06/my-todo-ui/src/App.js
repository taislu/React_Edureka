import React from 'react';
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import TodoApp from './components/todo/TodoApp'

import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {/* <h1>ROW-1</h1> */}
          <Header title='TODO APP' />
        {/*
          <GlobalAlert />
        */}
        </div>
      </div>

      <div className="row">
        <div className="col">
          {/* <h1>ROW-2</h1> */}
          <TodoApp /> 
        </div>
      </div>

      <div className="row">
        <div className="col">
          { /* <h1>ROW-3</h1> */ }
          <Footer note="TaiLu 2019" /> 
        </div>
      </div>      
    </div>
  );
}

export default App;
