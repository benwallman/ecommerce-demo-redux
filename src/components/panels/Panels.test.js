import React from 'react';
import { mount } from 'enzyme';

import { Panels } from './Panels';

test('displays the names for the all cakes', () => {
  const wrapper = mount(<Panels classes={{}} />);
  expect(wrapper.text()).toContain('Beautiful birthday cake');
  expect(wrapper.text()).toContain('Lovely wedding cake');
  expect(wrapper.text()).toContain('Cheesy, clicéd  cake');  
});

test('displays the prices for all the cakes', () => {
  const wrapper = mount(<Panels classes={{}} />);
  expect(wrapper.text()).toContain('£17.24');
  expect(wrapper.text()).toContain('£33.02');
  expect(wrapper.text()).toContain('£9.99');  
});

test('displays the images for all the cakes', () => {
  const wrapper = mount(<Panels classes={{}} />);
  const cardImages = wrapper.find('CardMedia');
  expect(cardImages).toHaveLength(3);
  const expectedImages = [
    "https://images.pexels.com/photos/433527/pexels-photo-433527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/2226/food-couple-sweet-married.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    "https://images.pexels.com/photos/227432/pexels-photo-227432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  ];
  cardImages.forEach((Node, index) => {
    expect(Node.prop('image')).toBe(expectedImages[index]);
  });
});