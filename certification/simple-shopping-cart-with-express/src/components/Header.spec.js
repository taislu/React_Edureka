import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

const setup = props => {
    const component = shallow( <Header title={props.title} />)

    return{
        component: component,
        h3: component.find('h3')
    }
}

describe('Header component', () => {
    it('should render title', () => {
        const {h3} = setup({title: 'Simple Shopping Cart'})
        expect(h3.text()).toMatch(/^Simple Shopping Cart/)
    })
})