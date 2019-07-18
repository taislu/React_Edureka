import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import GlobalAlertContainer from './GlobalAlertContainer'

import './App.css';

const App = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Header title='Simple Shopping Cart' />
          </div>
        </div>
  
        <div className="row">
          <div className="col">
             <ProductsContainer />
          </div>
          <div className="col">
             <CartContainer />
             <p></p>
             <GlobalAlertContainer />
          </div>
        </div>
  
        <div className="row">
          <div className="col">
           <Footer note="Tai Lu 2019" />
          </div>
        </div>      
      </div>
    );
  }

export default App