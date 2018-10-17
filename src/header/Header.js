import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserIcon from '@material-ui/icons/AccountCircle';

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
});

export const Header = ({ loggedIn }) => (
  <header>
    {loggedIn ? <UserIcon /> : null }
  </header>
);

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Header);
