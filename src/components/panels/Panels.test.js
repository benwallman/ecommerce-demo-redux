import React from 'react';
import { shallow, mount } from 'enzyme';

import Panels from './Panels';
import cakes from '../../cakes.json';

test('correctly renders', () => {
  const wrapper = shallow(<Panels />);
  expect(wrapper.find('div')).toHaveLength(1);
});

test('displays the names for the all cakes', () => {
  // 'Beautiful birthday cake'
  // 'Lovely wedding cake'
  // 'Cheesy, clicéd  cake'
  const wrapper = mount(<Panels cakes={cakes} />);
  expect(wrapper.text()).toContain('Beautiful birthday cake');
  expect(wrapper.text()).toContain('Lovely wedding cake');
  expect(wrapper.text()).toContain('Cheesy, clicéd  cake');  
});