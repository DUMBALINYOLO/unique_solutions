import React from "react";
import { connect } from 'react-redux';
import {  Grid,  Paper} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";
import {authLogin} from "../actions/auth";
import { Avatar, Button, Typography ,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Corporate from '../containers/Templates/Corporate';




class FlexibleLogin extends React.Component {

  state = {
    email: '',
    password: '',
    }

    onSubmit = e =>{
      e.preventDefault();
      this.props.onAuth(this.state.email, this.state.password);
      console.log(this.state.email, this.state.password)
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
      const paperStyle={padding :20,height:'70vh',width:380, margin:"20px auto"}
      const avatarStyle={backgroundColor:'#1bbd7e'}
      const btnstyle={margin:'8px 0'}
      const {email, password} = this.state;
      const { userRole } = this.props;
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }
    if (!this.props.token) {
      return(
        <Corporate>
          <form onSubmit={this.onSubmit}>
              <Paper elevation={10} style={paperStyle}>
                  <Grid align='center'>
                       <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                      <h2>Log In</h2>
                  </Grid>
                  <TextField
                    label="Email"
                    placeholder='Enter Email'
                    fullWidth required
                    onChange={this.onChange}
                    value={email}
                    name = "email"
                  />
                  <TextField
                    label='Password'
                    placeholder='Enter password'
                    type='password'
                    fullWidth required
                    onChange={this.onChange}
                    value={password}
                    name = "password"
                  />
                  <FormControlLabel
                      control={
                      <Checkbox
                          name="checkedB"
                          color="primary"
                      />
                      }
                      label="Remember me"
                   />
                  <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>
                  <Typography >
                       <Link>
                          Forgot password ?
                  </Link>
                  </Typography>
              </Paper>
          </form>
        </Corporate>
      );

    }
    if (userRole === 'admin'){
        return <Redirect to="/managementdashboard" />;
    }
    else if (userRole === 'customer'){
      return <Redirect to="/customers" />;
    }
    
    return(
      <Corporate>
        <form onSubmit={this.onSubmit}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <TextField
                  label="Email"
                  placeholder='Enter Email'
                  fullWidth required
                  onChange={this.onChange}
                  value={email}
                  name = "email"
                />
                <TextField
                  label='Password'
                  placeholder='Enter password'
                  type='password'
                  fullWidth required
                  onChange={this.onChange}
                  value={password}
                  name = "password"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Login</Button>
                <Typography >
                     <Link>
                        Forgot password ?
                </Link>
                </Typography>
            </Paper>
        </form>
      </Corporate>
    )
  }
}


const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    userRole: state.auth.userRole,
    token: state.auth.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) =>
      dispatch(authLogin(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlexibleLogin)
