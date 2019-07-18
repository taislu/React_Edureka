import React from 'react'
import { shallow } from 'enzyme'
import ProductsList from './ProductsList'

const setup = props => {
  const component = shallow(
    <ProductsList title={props.title}>{props.children}</ProductsList>
  )

  return {
    component: component,
    children: component.children().at(2),
    h5: component.find('h5')
  }
}

describe('ProductsList component', () => {
  it('should render title', () => {
    const { h5 } = setup({ title: 'Test Products' })
    expect(h5.text()).toMatch(/^Test Products$/)
  })

  it('should render children', () => {
    const { children } = setup({ title: 'Test Products', children: 'Test Children' })
    console.log("childreb.text : ", children.text())
    expect(children.text()).toMatch(/^Test Children$/)
  })
})
