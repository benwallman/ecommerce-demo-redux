import React from 'react';
import PropTypes from 'prop-types';
import UserIcon from '@material-ui/icons/AccountCircle';

const Header = ({ loggedIn }) => (
  <header>
    {loggedIn ? <UserIcon /> : null }
  </header>
);

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default Header;
