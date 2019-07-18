import React from 'react'
import { shallow } from 'enzyme'
import Cart from './Cart'
import Product from './Product'
import { Button } from 'reactstrap'

const setup = (total, products = []) => {
  const actions = {
    onCheckoutClicked: jest.fn()
  }

  const component = shallow(
    <Cart products={products} total={total} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find(Button),
    products: component.find(Product),
    small: component.find('small'),
    h6: component.find('h6')
  }
}

describe('Cart component', () => {
  it('should display total', () => {
    const { h6 } = setup('76')
    expect(h6.text()).toMatch(/^TOTAL : \$76/)
  })

  it('should display add some products message', () => {
    const { small } = setup()
    expect(small.text()).toMatch(/^Shopping Cart is empty !/)
  })

  it('should disable button', () => {
    const { button } = setup()
    expect(button.prop('disabled')).toEqual(true)
  })

  describe('when given product', () => {
    const product = [
      {
        id: 1,
        title: 'Product 1',
        price: 9.99,
        quantity: 1
      }
    ]

    it('should render products', () => {
      const { products } = setup('9.99', product)
      const props = {
        title: product[0].title,
        price: product[0].price,
        quantity: product[0].quantity
      }

      expect(products.at(0).props()).toEqual(props)
    })

    it('should not disable button', () => {
      const { button } = setup('9.99', product)
      expect(button.prop('disabled')).toEqual(false)
    })

    it('should call action on button click', () => {
      const { button, actions } = setup('9.99', product)
      button.simulate('click')
      expect(actions.onCheckoutClicked).toBeCalled()
    })
  })
})
