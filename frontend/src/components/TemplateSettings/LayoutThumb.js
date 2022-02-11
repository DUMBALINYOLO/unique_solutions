import React from 'react';
import Radio from '@mui/material/Radio';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/material/styles';
import styles from './settings-jss';

const LayoutThumbs = props => {
  const {
    classes,
    handleChange,
    selectedLayout,
    value,
    name,
    preview
  } = props;
  return (
    <div className={classNames(classes.thumb, selectedLayout === value ? classes.selectedTheme : '')}>
      <Radio
        checked={selectedLayout === value}
        value={value}
        onChange={handleChange}
      />
      <div className={classes.appPreview}>
        {preview}
        {name}
      </div>
    </div>
  );
};


export default withStyles(styles)(LayoutThumbs);
