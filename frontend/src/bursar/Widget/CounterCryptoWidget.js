import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import {
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import { data1 } from '../../api/chart/chartMiniData';
import colorfull from '../../api/palette/colorfull';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import CompareArrows from '@material-ui/icons/CompareArrows';
import bitcoinLogo from '../../images/crypto/bitcoin.png';
import rippleLogo from '../../images/crypto/ripple.png';
import moneroLogo from '../../images/crypto/monero.png';
import iotaLogo from '../../images/crypto/iota.png';
import styles from './widget-jss';
import CounterWidget from '../Counter/CounterWidget';
import CounterTrading from '../Counter/CounterTrading';
import {getCounterStats} from '../../actions/reports';
import { connect } from 'react-redux';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import Archive from '@material-ui/icons/Archive';
import Unarchive from '@material-ui/icons/Unarchive';

class CounterCryptoWidget extends PureComponent {
  componentDidMount() {
    this.props.getCounterStats();
  }

  render() {
    const { classes, width } = this.props;
    const {statscounter} = this.props;

    return (
      <div className={classes.rootCounter}>
        <Grid container spacing={2}>
          <Grid item md={9} xs={12}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <CounterTrading
                  color={colorfull[4]}
                  start={0}
                  end={statscounter.pending_internal_transactions}
                  duration={statscounter.pending_internal_transactions}
                  title="PENDING INTERNAL TRANSACTIONS"
                  logo={bitcoinLogo}
                  position="up"
                >
                  <LineChart width={240} height={60} data={data1}>
                    <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
                  </LineChart>
                </CounterTrading>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CounterTrading
                  color={colorfull[6]}
                  start={0}
                  end={statscounter.finished_internal_transactions}
                  duration={statscounter.finished_internal_transactions}
                  title="FINISHED INTERNAL TRANSACTIONS"
                  logo={bitcoinLogo}
                  position="up"
                >
                  <LineChart width={240} height={60} data={data1}>
                    <Line type="monotone" dataKey="amt" stroke="#FFFFFF" strokeWidth={2} />
                  </LineChart>
                </CounterTrading>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CounterTrading
                  color={colorfull[0]}
                  start={0}
                  end={statscounter.pending_private_transactions}
                  duration={statscounter.pending_private_transactions}
                  title="PENDING PRIVATE TRANSACTIONS"
                  logo={bitcoinLogo}
                  position="up"
                >
                  <LineChart width={240} height={60} data={data1}>
                    <Line type="monotone" dataKey="uv" stroke="#FFFFFF" strokeWidth={2} />
                  </LineChart>
                </CounterTrading>
              </Grid>
              <Grid item sm={6} xs={12}>
                <CounterTrading
                  color={colorfull[1]}
                  start={0}
                  end={statscounter.finished_private_transactions}
                  duration={statscounter.finished_private_transactions}
                  title="FINISHED PRIVATE TRANSACTIONS"
                  logo={bitcoinLogo}
                  position="up"
                >
                  <LineChart width={240} height={60} data={data1}>
                    <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
                  </LineChart>
                </CounterTrading>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} xs={12}>
            <Grid container spacing={2}>
              <Grid item sm={12} xs={6}>
                <CounterWidget
                  color={colorfull[2]}
                  start={0}
                  end={statscounter.customers}
                  duration={statscounter.customers}
                  title="CUSTOMERS"
                >
                  <PeopleAlt className={classes.counterIcon} />
                </CounterWidget>
              </Grid>
              <Grid item sm={12} xs={6}>
                <CounterWidget
                  color={colorfull[3]}
                  start={0}
                  end={statscounter.archived_transactions}
                  duration={statscounter.archived_transactions}
                  title="ARCHIVED TRANSACTIONS"
                >
                  <Archive className={classes.counterIcon} />
                </CounterWidget>
              </Grid>
              <Grid item xs={12}>
                <CounterWidget
                  color={colorfull[5]}
                  start={0}
                  end={statscounter.voided_transactions}
                  duration={statscounter.voided_transactions}
                  title="VOIDED TRANSACTIONS"
                >
                  <Unarchive className={classes.counterIcon} />
                </CounterWidget>
              </Grid>
            </Grid>
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
)(CounterCryptoWidget);

export default withWidth()(withStyles(styles)(BlogMapped));