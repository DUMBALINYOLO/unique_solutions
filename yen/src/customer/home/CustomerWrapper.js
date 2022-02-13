import React, {Component} from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';


class CustomerWrapper extends Component {

  render(){
      const {

        children,
        userRole
      } = this.props;

      if (!this.props.token){
        return <Navigate  to="/login" replace/>;
      }
      if (this.props.token !== null){
          if (userRole === 'admin'){
            return <Navigate to="/management" replace/>;
          }
      }

      return(
        <>
          <Header/>
            <div>{children}</div>
          <Footer/>

        </>

      );

    };

};


const mapStateToProps = state => ({
  token: state.auth.token,
  userRole: state.auth.userRole,
});

export default connect(mapStateToProps)(CustomerWrapper);
