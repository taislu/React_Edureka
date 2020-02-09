import React from 'react'

import TaskManager from './components/TaskManager/TaskManager.jsx'
import Header from './components/shared/Header/Header.jsx'
import Footer from './components/shared/Footer/Footer.jsx'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <TaskManager />    
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
