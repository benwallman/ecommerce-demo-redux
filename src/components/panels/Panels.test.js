import React from 'react';
import { mount } from 'enzyme';

import Panels from './Panels';

test('correctly renders', () => {
  const wrapper = mount(<Panels />);
  expect(wrapper.find('div')).toHaveLength(1);
});
