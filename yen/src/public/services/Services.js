import React, { useState, useEffect } from 'react';
import Paper from "@mui/material/Paper";
import { useNavigate } from 'react-router-dom';
import {getServices} from '../../actions/services';
import PublicWrapper from '../home/PublicWrapper';
import { connect } from 'react-redux';
import ServicesContainer from './ServicesContainer';


const Services = props => {

  const { records} = props;


  useEffect(() => {
    if(!props.fetched) {
        props.getServices(props.token);
    }
    console.log('mount it!');


  }, []);


  return (
    <PublicWrapper>
      <Paper
        style={{paddingTop: '100px', paddingBottom: '30px', paddingLeft: '30px', paddingRight: '30px',}}

      >
        <ServicesContainer records={records} />

      </Paper>
    </PublicWrapper>

  );
};

const mapStateToProps = state => ({
    records: state.services.services,
    token: state.auth.token,

  });



export default connect(
    mapStateToProps,
    {
      getServices
    }
  )(Services);
