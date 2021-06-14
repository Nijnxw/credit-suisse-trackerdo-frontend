import React from 'react'
import { shallow } from 'enzyme'
import Application from "../../src/components/Application";

test('Application renders correctly', () => {
  const tree = shallow(<Application />);
  expect(tree.debug()).toMatchSnapshot();
});
