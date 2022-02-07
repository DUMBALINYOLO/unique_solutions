import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Link, Route } from 'react-router-dom';
import styles from './breadCrumb-jss';

const Breadcrumbs = (props) => {
  const {
    classes,
    theme,
  } = props;
  return (
    <section className={classNames(theme === 'dark' ? classes.dark : classes.light, classes.breadcrumbs)}>
      <Route
        path="*"
        render={() => {


          return (
            <p>
            </p>
          );
        }}
      />
    </section>
  );
};



export default withStyles(styles)(Breadcrumbs);
