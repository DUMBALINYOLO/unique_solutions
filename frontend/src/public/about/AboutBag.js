import React from 'react';
import Corporate from '../../containers/Templates/Corporate';
import { withStyles } from '@material-ui/core/styles';
import AboutOne from './AboutOne';
import AboutTwo from './About';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'primary',
    padding: '30px',
  },
});


function TestimnonialsSections(props) {
  const { classes } = props;
  return (
    <Corporate>
      <div className={classes.root}>
          <AboutTwo  />
      </div>
    </ Corporate>
  );
}


export default withStyles(styles)(TestimnonialsSections);
