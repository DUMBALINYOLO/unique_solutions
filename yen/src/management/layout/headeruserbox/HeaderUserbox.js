import React, { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import { withStyles } from '@mui/styles';
import {connect } from 'react-redux';





const HeaderUserbox = (props) => {

  const history = useNavigate();
  const {firstName, lastName} = props;
  const user = {
    name: firstName,
    sub: lastName,
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const hendleLogout = () => {
    history.replace('/login');
  };

  return (
    <Fragment>
      <Button
        color="inherit"
        onClick={handleClick}
        className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center">
        <Box>
          <Badge>
            <Avatar sizes="44" alt="Dustin Watson" src={avatar4} />
          </Badge>
        </Box>
        <div className="d-none d-xl-block pl-3">
          <div className="font-weight-bold pt-2 line-height-1">{user.name}</div>
          <span className="text-white-50">{user.sub}</span>
        </div>
        <span className="pl-1 pl-xl-3">
          <FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" />
        </span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        getcontentanchorel={null}
        open={Boolean(anchorEl)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        onClose={handleClose}
        className="ml-2">
        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
          <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
            <Box>
              <Badge
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <Avatar sizes="44" alt="Dustin Watson" src={avatar4} />
              </Badge>
            </Box>
            <div className="pl-3 ">
              <div className="font-weight-bold text-center pt-2 line-height-1">
                {user.name}
              </div>
              <span className="text-black-50 text-center">{user.sub}</span>
            </div>
            <Divider className="w-100 mt-2" />
            <ListItem button>Minha Conta</ListItem>
            <ListItem>
              Logout
            </ListItem>
          </List>
        </div>
      </Menu>
    </Fragment>
  );
}


const mapStateToProps = state =>({
  token: state.auth.token,
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
})

export default connect(
  mapStateToProps,
  {logout} )
( HeaderUserbox);
