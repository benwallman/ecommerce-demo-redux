import React from 'react';
// import PropTypes from 'prop-types';
import cakes from '../../cakes.json';

const Panels = () => (
  <div>
    {cakes.map(({ name }) => <h2 key={name}>{name}</h2>)}
  </div>
);

export default Panels;
