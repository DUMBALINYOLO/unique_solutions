import React, { Fragment } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { Bell, Activity, Briefcase, Calendar } from 'react-feather';

const SidebarFooter = () => {

  return (
    <Fragment>
      <Box className="app-sidebar-footer-wrapper">
        <ul className="app-sidebar-footer">
          <li>
            <Tooltip arrow title="Projects Application">
              <IconButton >
                <Activity />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip arrow title="Helpdesk Dashboard">
              <IconButton  className="mx-1">
                <Bell />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip arrow title="Calendar Application">
              <IconButton  className="mx-1">
                <Calendar />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip arrow title="Buttons">
              <IconButton >
                <Briefcase />
              </IconButton>
            </Tooltip>
          </li>
        </ul>
      </Box>
    </Fragment>
  );
}


export default SidebarFooter;
