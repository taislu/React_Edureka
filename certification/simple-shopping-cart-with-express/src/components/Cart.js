import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Button } from 'reactstrap'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <small>Shopping Cart is empty !</small>
  )

  return (
    <div>
      <h5>Your Cart</h5>
      <hr />
      <div>{nodes}</div>
      <p></p>
      <h6>TOTAL : &#36;{total}</h6>
      <hr />
      <Button 
        color="primary"
        onClick={onCheckoutClicked}
        disabled={hasProducts ? false : true}>
        Checkout
      </Button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
