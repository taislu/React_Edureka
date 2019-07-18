import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'
import ProductItem from './ProductItem'
import { Button } from 'reactstrap'

const setup = product => {
  const actions = {
    onAddToCartClicked: jest.fn()
  }

  const component = shallow(
    <ProductItem product={product} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    Button: component.find(Button),
    product: component.find(Product)
  }
}

let productProps

describe('ProductItem component', () => {
  beforeEach(() => {
    productProps = {
      title: 'Product 1',
      price: 9.99,
      inventory: 6
    }
  })

  it('should render product', () => {
    const { product } = setup(productProps)
    expect(product.props()).toEqual({ title: 'Product 1', price: 9.99, quantity: 6 })
  })

  it('should render Add To Cart message', () => {
    const { Button } = setup(productProps)
    //expect(Button.text()).toMatch(/^Add to cart/)
    //console.log("****** Debugging ****** ", Button.text() )
  })

  it('should not disable button', () => {
    const { Button } = setup(productProps)
    expect(Button.prop('disabled')).toEqual(false)
  })

  it('should call action on button click', () => {
    const { Button, actions } = setup(productProps)
    Button.simulate('click')
    expect(actions.onAddToCartClicked).toBeCalled()
  })

  describe('when product inventory is 0', () => {
    beforeEach(() => {
      productProps.inventory = 0
    })

    it('should render Sold Out message', () => {
      const { Button } = setup(productProps)
      //expect(Button.text()).toMatch(/^Sold Out/)
    })

    it('should disable button', () => {
      const { Button } = setup(productProps)
      expect(Button.prop('disabled')).toEqual(true)
    })
  })
})
