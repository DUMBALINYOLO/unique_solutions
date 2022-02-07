import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { GiAbstract014 } from "react-icons/gi";
import styles from './papperStyle-jss';

class PapperBlock extends React.Component {
  render() {
    const {
      classes,
      title,
      desc,
      children,
      whiteBg,
      noMargin,
      colorMode,
      overflowX,
    } = this.props;
    return (
      <div>
        <Paper className={classNames(classes.root, noMargin && classes.noMargin, colorMode && classes.colorMode)} elevation={0}>
          <div className={classes.descBlock}>
            <div className={classes.titleText}>
              <Typography variant="h6" component="h2" className={classes.title}>
                {title}
              </Typography>
              <Typography component="p" className={classes.description}>
                {desc}
              </Typography>
            </div>
          </div>
          <section className={classNames(classes.content, whiteBg && classes.whiteBg, overflowX && classes.overflowX)}>
            {children}
          </section>
        </Paper>
      </div>
    );
  }
}


PapperBlock.defaultProps = {
  whiteBg: false,
  noMargin: false,
  colorMode: false,
  overflowX: false,
  icon: 'ios-bookmark-outline'
};

export default compose(withStyles(styles))(PapperBlock);
