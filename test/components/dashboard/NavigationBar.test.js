import React from 'react'
import { shallow } from 'enzyme'
import NavigationBar from '../../../src/components/dashboard/NavigationBar'
import { Navbar, NavbarGroup } from '@blueprintjs/core'
import { NavLink } from 'react-router-dom'

let wrapper

beforeEach(() => {
  wrapper = shallow(<NavigationBar /> );
})

describe('<NavigationBar /> rendering', () => {
  it('should render correctly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  })
  
  it('should render 1 <NavBar>', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
  })

  it('should render 2 <NavBarGroup>', () => {
    expect(wrapper.find(NavbarGroup)).toHaveLength(2);
  })

  it('should render 3 <NavLink>', () => {
    expect(wrapper.find(NavLink)).toHaveLength(3);
  })
})
