import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer.jsx'

Enzyme.configure({ adapter: new Adapter() });

describe('FooterComponent', () => {
  it('Mounts Correctly', () => {
    shallow(<Footer />)
  })

  it('Has the copyright text', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.find('small').text()).toContain('Edureka')
  })
})