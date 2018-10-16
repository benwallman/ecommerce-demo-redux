import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from './Header';
import UserIcon from '@material-ui/icons/AccountCircle';

test('correctly renders', () => {
  const wrapper = shallow(<Header loggedIn />);
  expect(wrapper).toHaveLength(1);
  expect(wrapper.find('header')).toHaveLength(1);
});

test('does NOT display a user icon, when the user is logged out', () => {
  const wrapper = mount(<Header loggedIn={false} />);
  expect(wrapper.find(UserIcon)).toHaveLength(0);
});

test('displays a user icon, if the user is logged in', () => {
  const wrapper = mount(<Header loggedIn />);
  expect(wrapper.find(UserIcon)).toHaveLength(1);
});
