import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/ManagementLayout'
import Users  from './Users';
import {connect}  from 'react-redux';
import {getUser} from '../../actions/auth'
import UserDetail from './UserDetail';

function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const UsersTab =(props) => {
  const [value, setValue] = useState(0)
  const { classes,  token } = props;


  useEffect(() => {
    if(!props.fetched) {
        props.getUser(props.match.params.id, token);
    }
    console.log('mount it!');


  }, []);


  const handleChange = (event, value) => {
    setValue( value);
  };



    return (
      <ManagementLayout>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="secondary"
            >
              <Tab label="DETAIL" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><UserDetail data={props.person} /></TabContainer>}
        </div>
      </ManagementLayout>
    );
}



const mapStateToProps = state =>({
  person: state.auth.person,
  token: state.auth.token,

})

const UsersMapped = connect(
  mapStateToProps,
  {getUser}
)(UsersTab)

export default withStyles(styles)(UsersMapped);
