import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Header from './Header.jsx'

Enzyme.configure({ adapter: new Adapter() });

describe('HeaderComponent', () => {
  it('Mounts Correctly', () => {
    const store = createStore(() => ({
      user: null
    }))

    shallow(
      <Provider store={store}>
        <Header />
      </Provider>      
    )    
  })
})