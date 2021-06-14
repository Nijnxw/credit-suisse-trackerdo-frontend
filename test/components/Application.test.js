import React from 'react'
import { shallow } from 'enzyme'
import Application from "../../src/components/Application"

let wrapper

beforeEach(() => {
  wrapper = shallow(<Application /> );
})

describe('<Application /> rendering', () => {
  it('should render correctly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  })
  
  it('should render 1 <div>', () => {
    expect(wrapper.children('div')).toHaveLength(1);
  })
})
