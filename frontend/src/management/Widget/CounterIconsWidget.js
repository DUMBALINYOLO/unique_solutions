import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import ContactsIcon from '@material-ui/icons/Contacts';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import CollectionsBookmark from '@material-ui/icons/CollectionsBookmark';
import Edit from '@material-ui/icons/Edit';
import colorfull from '../../api/palette/colorfull';
import CounterWidget from '../Counter/CounterWidget';
import {getCounterStats} from '../../actions/reports';
import styles from './widget-jss';
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import {
  Paper,
}
from '@material-ui/core';


class CounterIconWidget extends PureComponent {

  componentDidMount() {
    this.props.getCounterStats();
  }

  render() {
    const { classes } = this.props;
    const {statscounter} = this.props;
    console.log(statscounter)

    return (
      <div className={classes.rootCounterFull}>
          <Grid container spacing={2}>
            <Grid item xs={3} md={3}>
              <Button type="button" label="ARCHIVED TRANSACTIONS" icon="pi pi-users" className="p-button-info">
                <Badge value={statscounter.archived_transactions} size="xlarge" severity="info" />
              </Button>
            </Grid>
            <Grid item xs={3} md={3}>
              <Button type="button" label="VOIDED TRANSACTIONS" icon="pi pi-users" className="p-button-info">
                <Badge value={statscounter.voided_transactions} size="xlarge" severity="info" />
              </Button>
            </Grid>
            <Grid item xs={3} md={3}>
              <Button type="button" label="SUPERVISORS" icon="pi pi-users" className="p-button-info">
                <Badge value={statscounter.supervisors} size="xlarge" severity="info" />
              </Button>

            </Grid>
            <Grid item xs={3} md={3}>
              <Button type="button" label="OPERATORS" icon="pi pi-users" className="p-button-info">
                <Badge value={statscounter.operators} size="xlarge" severity="info" />
              </Button>
            </Grid>
            <Grid item xs={3} md={3}>
              <Button type="button" label="FINISHED TRANSACTIONS" icon="pi pi-users" className="p-button-info">
                <Badge value={statscounter.finished_transactions} size="xlarge" severity="info" />
              </Button>
            </Grid>
            <Grid item xs={3} md={3}>
              <Button type="button" label="STATION MANAGERS" icon="pi pi-users" className="p-button-info">
                <Badge value={statscounter.station_managers} size="xlarge" severity="info" />
              </Button>
            </Grid>

            <Grid item xs={3} md={3}>
              <Button type="button" label="ADMIN STAKEHOLDERS" icon="pi pi-users" className="p-button-info">
                <Badge value={statscounter.admin_stakeholders} size="xlarge" severity="info" />
              </Button>
            </Grid>




            <Grid item xs={3} md={3}>
              <Button type="button" label="SCALE LOGS" icon="pi pi-users" className="p-button-info">
                <Badge value={statscounter.scale_logs} size="xlarge" severity="info" />
              </Button>
            </Grid>
            <Grid item xs={3} md={3}>
              <Button type="button" label="PENDING TRANSACTIONS" icon="pi pi-users" className="p-button-info">
                <Badge value={statscounter.pending_transactions} size="xlarge" severity="info" />
              </Button>
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
)(CounterIconWidget);

export default (withStyles(styles)(BlogMapped));
