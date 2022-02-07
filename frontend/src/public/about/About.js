import React, {useState, useEffect} from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './helpSupport-jss';
import {
  makeStyles,
  Paper,
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3),

  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))


const About =(props) => {
  const [expanded, setExpanded] = useState('panel1')


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel:false);
  };

    const { classes } = props;
    const cecisa = useStyles();


    return (
      <Paper className={cecisa.pageContent}>

        <ExpansionPanel  className='card-box-hover-rise-alt' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>PROJECT</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                SCHOOL FEES MANAGEMENT SYSTEM PROJECT
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel  className='card-box-hover-rise-alt ' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>MOTTO</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                Unearthing Indigenous Potential
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className='card-box-hover-rise-alt ' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>DATE OF ESTABLISHMENT</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                12 June 2020

              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className='card-box-hover-rise-alt ' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading} style={{textAlign: 'center'}}>VALUES</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>
                Creativity <br />
                Transparency <br />
                Mutual Respect<br />
                Inclusiveness <br />


              </p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
  );
}



export default withStyles(styles)(About);
