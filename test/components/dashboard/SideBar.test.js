import React from 'react'
import { shallow } from 'enzyme'
import SideBar from '../../../src/components/dashboard/SideBar';
import { List, ListItem } from '@material-ui/core';

let wrapper

beforeEach(() => {
  wrapper = shallow(<SideBar /> );
})

describe('<SideBar /> rendering', () => {
  it('should render correctly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  })
  
  it('should render 1 <div>', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  })

  it('should render 1 <List>', () => {
    expect(wrapper.find(List)).toHaveLength(1);
  })

  it('should render 5 <ListItem>', () => {
    expect(wrapper.find(ListItem)).toHaveLength(5);
  })
})
