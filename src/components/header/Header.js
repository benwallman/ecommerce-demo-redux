import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import CakeIcon from '@material-ui/icons/Cake';
import { withStyles } from '@material-ui/core/styles';

const mapStateToProps = state => ({
  numberOfCakes: state.basket.numberOfCakes,
});

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    'font-size': '1.2em',
    display: 'block',
  },
  basket: {
    display: 'flex',
  },
});

export const Header = ({ classes, numberOfCakes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} color="inherit" noWrap>
          Ecommerce demo
        </Typography>
        <div className={classes.grow} />
        <div className={classes.basket}>
          <IconButton color="inherit">
            <Badge className={classes.margin} badgeContent={numberOfCakes} color="secondary">
              <CakeIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  numberOfCakes: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Header));
