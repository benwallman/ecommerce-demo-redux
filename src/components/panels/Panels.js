import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import AddIcon from '@material-ui/icons/Add';

import addCake from '../../actions/addCake';
import cakes from '../../cakes.json';

const mapDispatchToProps = dispatch => ({
  addCake: () => dispatch(addCake())
});

const styles = theme => ({
  card: {
    flex: '0 1 auto',
    'width': '30%',
    'margin-left': '35%',
    'margin-top': '2%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: red[500],
  },
  container: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
  }
});

export const Panels = ({ classes, addCake }) => (
  <div className={classes.container}>
    {cakes.map(({ name, imageUrl, cost }) => (
      <Card className={classes.card} key={name}>
        <CardHeader
          action={
            <IconButton onClick={addCake} >
              <AddIcon />
            </IconButton>
          }
          title={name}
          subheader={cost}
        />
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={name}
        />
      </Card>
    ))}
  </div>
);

Panels.propTypes = {
  classes: PropTypes.object.isRequired,
  addCake: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Panels));
