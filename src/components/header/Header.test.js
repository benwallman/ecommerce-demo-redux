import React from 'react';
import { mount } from 'enzyme';

import { Header } from './Header';

test('correctly renders', () => {
  const wrapper = mount(<Header numberOfCakes={0} classes={{}} />);
  expect(wrapper.find('header')).toHaveLength(1);
});

test('displays the number of cakes in the users basket', () => {
  const wrapper = mount(<Header numberOfCakes={17} classes={{}} />);
  expect(wrapper.find('Badge').prop('badgeContent')).toBe(17);
});
