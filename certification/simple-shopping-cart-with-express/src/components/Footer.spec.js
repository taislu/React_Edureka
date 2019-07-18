import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

const setup = props => {
    const component = shallow( <Footer note={props.note} />)

    return{
        component: component,
        small: component.find('small')
    }
}

describe('Footer component', () => {
    it('should render note', () => {
        const {small} = setup({note: 'Footer Message'})
        expect(small.text()).toMatch(/^© Footer Message/)
    })
})