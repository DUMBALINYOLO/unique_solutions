import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";
import AppBar from '@mui/material//AppBar';
import hero9 from './ubuntu.png';
import { withStyles } from '@mui/styles';
import PublicWrapper from '../home/PublicWrapper';
import { Navigate } from "react-router-dom";

import {authLogin, forgotPassword, resetPassword} from "../../actions/auth";
import {activateUser} from "../../actions/users/users";
import {addUser} from "../../actions/users/users";
import { connect } from 'react-redux';
import GerereLogin from './Login';
import ForgotPassword from './Forgot';
import ResetPassword from './Reset';
import Register from './Register';
import Activate from './Activate';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '6px',
    '& > div': {
      maxWidth: 40,
      height: '4px',
      borderRadius: '25px',
      width: '100%',
      backgroundColor: '#000'
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: theme.palette.primary[900],
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);


function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};



class Login extends React.Component {

  state = {
    value: 4
  }


  handleChange = (event, newValue) => {
    this.setState({value: newValue})
  };




  render(){
    const {token, userRole, authLogin} = this.props;
    const {value} = this.state;


    if (!token) {

      return (
        <PublicWrapper>
              <Grid
                container
                spacing={0}
                style={{paddingTop: '100px', paddingBottom: '30px', paddingLeft: '30px', paddingRight: '30px',}}
              >

                <Grid
                  item

                  md={12}

                >
                    <AppBar position="static" color="default">
                      <Tabs
                        value={value}
                        onChange={this.handleChange}
                        variant="fullWidth"
                        scrollButtons="on"
                        indicatorColor="primary"
                        textColor="secondary"
                      >
                        <Tab label="LOGIN" />
                        <Tab label="REGISTER AS A CUSTOMER" />
                        <Tab label="FORGOT PASSWORD" />
                        <Tab label="RESET PASSWORD" />
                        <Tab label="ACTIVATE ACCOUNT" />
                      </Tabs>
                    </AppBar>

                    <TabPanel value={value} index={0}>


                      <Grid container spacing={0} style={{paddingTop: '40px'}}>
                        <Grid item md={4} >
                        </Grid>
                        <Grid item md={4} >
                          <GerereLogin
                            authLogin={authLogin}
                          />
                        </Grid>
                        <Grid item md={4} >

                        </Grid>
                      </Grid>

                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container spacing={0} style={{paddingTop: '40px'}}>
                          <Grid item md={4} >
                          </Grid>
                          <Grid item md={4} >
                            <Register
                                addStudent={this.props.addStudent}
                                msg={this.props.message}
                              />
                          </Grid>
                          <Grid item md={4} >
                          </Grid>
                        </Grid>

                    </TabPanel>

                    <TabPanel value={value} index={2}>

                      <Grid container spacing={0} style={{paddingTop: '40px'}}>
                        <Grid item md={4} >
                        </Grid>
                        <Grid item md={4} >
                          <ForgotPassword
                            forgotPassword={this.props.forgotPassword}
                            msg={this.props.message}
                          />
                        </Grid>
                        <Grid item md={4} >
                        </Grid>
                      </Grid>

                    </TabPanel>
                    <TabPanel value={value} index={3}>
                      <Grid container spacing={0} style={{paddingTop: '40px'}}>

                        <Grid item md={4} >
                        </Grid>
                        <Grid item md={4} >
                          <ResetPassword
                            resetPassword={this.props.resetPassword}
                            msg={this.props.message}
                          />
                        </Grid>
                        <Grid item md={4} >
                        </Grid>
                    </Grid>

                  </TabPanel>
                  <TabPanel value={value} index={4}>
                    <Grid container spacing={0} style={{paddingTop: '40px'}}>

                      <Grid item md={4} >
                      </Grid>
                      <Grid item md={4} >
                        <Activate
                          activateUser={this.props.activateUser}
                          msg={this.props.message}
                        />
                      </Grid>
                      <Grid item md={4} >
                      </Grid>
                  </Grid>

                </TabPanel>
                </Grid>
              </Grid>
        </PublicWrapper>
      );


    }
    if (userRole === 'admin'){
      return <Navigate to="/management" replace />;
    }
    else if(userRole === 'customer'){
          return <Navigate to="/customers" replace/>;
    }
    return (
      <PublicWrapper>
        <Grid 
          container
          spacing={0}
          style={{paddingTop: '100px', paddingBottom: '30px', paddingLeft: '30px', paddingRight: '30px',}}
        >

              <Grid
                item

                md={12}

              >
                  <AppBar position="static" color="default">
                    <Tabs
                      value={value}
                      onChange={this.handleChange}
                      variant="fullWidth"
                      scrollButtons="on"
                      indicatorColor="primary"
                      textColor="secondary"
                    >
                      <Tab label="LOGIN" />
                      <Tab label="REGISTER AS A CUSTOMER" />
                      <Tab label="FORGOT PASSWORD" />
                      <Tab label="RESET PASSWORD" />
                      <Tab label="ACTIVATE ACCOUNT" />
                    </Tabs>
                  </AppBar>

                  <TabPanel value={value} index={0}>


                    <Grid container spacing={0} style={{paddingTop: '40px'}}>
                      <Grid item md={4} >
                      </Grid>
                      <Grid item md={4} >
                        <GerereLogin
                          authLogin={authLogin}
                        />
                      </Grid>
                      <Grid item md={4} >

                      </Grid>
                    </Grid>

                  </TabPanel>
                  <TabPanel value={value} index={1}>
                      <Grid container spacing={0} style={{paddingTop: '40px'}}>
                        <Grid item md={4} >
                        </Grid>
                        <Grid item md={4} >
                          <Register
                              addStudent={this.props.addStudent}
                              msg={this.props.message}
                            />
                        </Grid>
                        <Grid item md={4} >
                        </Grid>
                      </Grid>

                  </TabPanel>

                  <TabPanel value={value} index={2}>

                    <Grid container spacing={0} style={{paddingTop: '40px'}}>
                      <Grid item md={4} >
                      </Grid>
                      <Grid item md={4} >
                        <ForgotPassword
                          forgotPassword={this.props.forgotPassword}
                          msg={this.props.message}
                        />
                      </Grid>
                      <Grid item md={4} >
                      </Grid>
                    </Grid>

                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <Grid container spacing={0} style={{paddingTop: '40px'}}>

                      <Grid item md={4} >
                      </Grid>
                      <Grid item md={4} >
                        <ResetPassword
                          resetPassword={this.props.resetPassword}
                          msg={this.props.message}
                        />
                      </Grid>
                      <Grid item md={4} >
                      </Grid>
                  </Grid>

                </TabPanel>
                <TabPanel value={value} index={4}>
                  <Grid container spacing={0} style={{paddingTop: '40px'}}>

                    <Grid item md={4} >
                    </Grid>
                    <Grid item md={4} >
                      <Activate
                        activateUser={this.props.activateUser}
                        msg={this.props.message}
                      />
                    </Grid>
                    <Grid item md={4} >
                    </Grid>
                </Grid>

              </TabPanel>
              </Grid>
            </Grid>
      </PublicWrapper>
    );

  }
};



const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    userRole: state.auth.userRole,
    token: state.auth.token,
    msg: state.auth.msg,
    message: state.errors.msg,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authLogin: (email, password) =>
      dispatch(authLogin(email, password)),
      forgotPassword : (user) => dispatch(forgotPassword(user)),
      resetPassword: (user) => dispatch(resetPassword(user)),
      addStudent: (user) => dispatch(addUser(user)),
      activateUser : (user) => dispatch(activateUser(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
