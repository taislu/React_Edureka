import axios from 'axios'

export const ADD_TO_CART = 'ADD_TO_CART'
export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

export const G_SUCCESS = 'G_SUCCESS'
export const G_RESET = 'G_RESET'

/*
store.state = {
  products: {
    byId: {
      1: {id: 1, title: "TV", price: 11500.01, inventory: 3},
      2: {id: 2, title: "Fridge", price: 11110.99, inventory: 19},
      3: {id: 3, title: "Mobile", price: 1119.99, inventory: 4}
    },
    visibleIds: [1, 2, 3],
  },
  cart: {
    addedIds: [1, 2],
    quantityById: {1: 1, 2: 1}
  }
  globalAlert: {
    type: "success",
    text: "Checkout OK"
  }
}
*/

export const globalResetAction = () => {
  return {
    type: G_RESET
  }
}

export const globalSuccessAction = (text) => {
  return {
    type: G_SUCCESS,
    text
  }
}

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
})

/*
export function getAllProducts() {
  return (dispatch) => {    
    axios.get("http://localhost:6700/getProducts")
      .then((result) => {            
        dispatch(receiveProducts(result.data))
      }).catch((err) => {
        console.log(err)
      })
  }
}
*/

export const getAllProducts = () => dispatch => {
  axios.get("http://localhost:6700/getProducts")
      .then((result) => {            
        dispatch(receiveProducts(result.data))
      }).catch((err) => {
        console.log(err)
      })
}

const addToCartAction = productId => ({
  type: ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartAction(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()
  console.log("Checkout button clicked ****** ", cart)

  dispatch({
    type: CHECKOUT_REQUEST
  })
  dispatch(globalSuccessAction("Checkout OK !"))
  
}
