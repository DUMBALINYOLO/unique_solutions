import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Grid,
  Avatar,
  Box,
  Typography,
  Tabs,
  Tab,
  Badge,
  Card,
  CardContent,
  Button,
  Divider
} from '@material-ui/core';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import people1 from '../../../assets/images/stock-photos/people-1.jpg';

import people3 from '../../../assets/images/stock-photos/people-3.jpg';

import Chart from 'react-apexcharts';
import CountUp from 'react-countup';

import { Briefcase, Layers } from 'react-feather';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export default function Stats(props) {

  const {
    pending_payment_anually_bills,
    pending_payment_biannually_bills,
    pending_payment_bimonthly_bills,
    pending_payment_daily_bills,
    unverified_dailly_bills,
    pending_payment_monthly_bills,
    pending_payment_onceoff_bills,
    pending_payment_quarterly_bills,
    pending_payment_weekly_bills,
    unverified_anually_bills,
    unverified_biannually_bills,
    unverified_bill_payments,
    unverified_bimonthly_bills,
    unverified_monthly_bills,
    unverified_onceoff_bills,
    unverified_quaterly_bills,
    unverified_weekly_bills,

  } =props;


  const chart16Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      stacked: true
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%'
      }
    },
    stroke: {
      show: false,
      width: 0,
      colors: ['transparent']
    },
    colors: ['#7a7b97', 'rgba(122, 123, 151, 0.15)'],
    fill: {
      opacity: 1
    },
    legend: {
      show: false
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last week',
      'Last month',
      'Last year',
      'Last quarter'
    ],
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart16Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 3.0, 2.8, 4.0, 3.8, 5.1, 3.6, 4.1, 2.6, 1.2]
    }
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4 bg-royal card-box-hover-rise">

              <div className="card-header bg-royal card-box-hover-rise">
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  DAILY BILLS
                </h4>
              </div>
              <CardContent className="p-3">
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>UNVERIFIED</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {unverified_dailly_bills}
                  </div>
                </div>
                <Divider />
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>PENDING PAYMENT</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {pending_payment_daily_bills}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4 bg-royal card-box-hover-rise">

              <div className="card-header bg-royal card-box-hover-rise">
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  WEEKLY BILLS
                </h4>
              </div>
              <CardContent className="p-3">
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>UNVERIFIED</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {unverified_weekly_bills}
                  </div>
                </div>
                <Divider />
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>PENDING PAYMENT</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {pending_payment_weekly_bills}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
      <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4 bg-royal card-box-hover-rise">

              <div className="card-header bg-royal card-box-hover-rise">
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  BI-MONTHLY BILLS
                </h4>
              </div>
              <CardContent className="p-3">
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>UNVERIFIED</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {unverified_bimonthly_bills}
                  </div>
                </div>
                <Divider />
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>PENDING PAYMENT</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {pending_payment_bimonthly_bills}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4 bg-royal card-box-hover-rise">

              <div className="card-header bg-royal card-box-hover-rise">
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  MONTHLY BILLS
                </h4>
              </div>
              <CardContent className="p-3">
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>UNVERIFIED</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {unverified_monthly_bills}
                  </div>
                </div>
                <Divider />
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>PENDING PAYMENT</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {pending_payment_monthly_bills}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
      </Grid>

      <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4 bg-royal card-box-hover-rise">

              <div className="card-header bg-royal card-box-hover-rise">
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  QUARTERLY BILLS
                </h4>
              </div>
              <CardContent className="p-3">
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>UNVERIFIED</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {unverified_quaterly_bills}
                  </div>
                </div>
                <Divider />
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>PENDING PAYMENT</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {pending_payment_quarterly_bills}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4 bg-royal card-box-hover-rise">

              <div className="card-header bg-royal card-box-hover-rise">
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  BI-ANNUALLY BILLS
                </h4>
              </div>
              <CardContent className="p-3">
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>UNVERIFIED</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {unverified_biannually_bills}
                  </div>
                </div>
                <Divider />
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>PENDING PAYMENT</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {pending_payment_biannually_bills}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
      </Grid>

      <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4 bg-royal card-box-hover-rise">

              <div className="card-header bg-royal card-box-hover-rise">
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  ANNUALLY BILLS
                </h4>
              </div>
              <CardContent className="p-3">
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>UNVERIFIED</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {unverified_anually_bills}
                  </div>
                </div>
                <Divider />
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>PENDING PAYMENT</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {pending_payment_anually_bills}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card className="card-box mb-4 bg-royal card-box-hover-rise">

              <div className="card-header bg-royal card-box-hover-rise">
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                  ONCE-OFF BILLS
                </h4>
              </div>
              <CardContent className="p-3">
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>UNVERIFIED</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {unverified_onceoff_bills}
                  </div>
                </div>
                <Divider />
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div>
                    <b>PENDING PAYMENT</b>
                  </div>
                  <div className="font-weight-bold text-warning font-size-xl">
                    {pending_payment_onceoff_bills}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
    </Fragment>
  );
}
