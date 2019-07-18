import React from 'react'
import { Route } from 'react-router-dom'

import TaskManager from './components/TaskManager/TaskManager.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Header from './components/shared/Header/Header.jsx'
import Footer from './components/shared/Footer/Footer.jsx'
import GlobalAlert from './components/shared/GlobalAlert/GlobalAlert.jsx'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
          <GlobalAlert />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Route path='/' exact component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/tasks' component={TaskManager} />    
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>      
    </div>
  );
}

export default App
