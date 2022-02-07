import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  BarChart, Bar,
  AreaChart, Area,
  LineChart, Line,
} from 'recharts';
import { data1 } from '../../api/chart/chartMiniData';
import colorfull from '../../api/palette/colorfull';
import AssignmentReturned from '@material-ui/icons/AssignmentReturned';
import CounterWidget from '../Counter/CounterWidget';
import styles from './widget-jss';
import {getCounterStats} from '../../actions/reports';
import { connect } from 'react-redux';
import Person from '@material-ui/icons/Person';

class CounterChartWidget extends PureComponent {

  componentDidMount() {
    this.props.getCounterStats();
  }

  render() {
    const { classes } = this.props;
    const {statscounter} = this.props;

    return (
      <div className={classes.rootCounter}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[6]}
              start={0}
              end={statscounter.operators}
              duration={statscounter.operators}
              title="OPERATORS"
            >
              <Person className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[3]}
              start={0}
              end={statscounter.supervisors}
              duration={statscounter.supervisors}
              title="SUPERVISORS"
            >
              <Person className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[5]}
              start={0}
              end={statscounter.station_managers}
              duration={statscounter.station_managers}
              title="MANAGERS"
            >
              <Person className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item md={3} xs={6}>
            <CounterWidget
              color={colorfull[4]}
              start={0}
              end={statscounter.admin_stakeholders}
              duration={statscounter.admin_stakeholders}
              title="ADMINISTRATORS"
            >
              <Person className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  statscounter: state.reports.statscounter,
});

const BlogMapped = connect(
  mapStateToProps,
  {getCounterStats}
)(CounterChartWidget);

export default (withStyles(styles)(BlogMapped));