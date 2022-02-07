import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {authLogin} from ".././actions/auth";



class Login extends React.Component {
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
    const {email, password} = this.state;
    const { userRole } = this.props;
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }
    console.log(userRole)
    if (userRole === 'customer'){
        return <Redirect to="/customers" />;
    }
    else if(userRole === 'manager'){
        return <Redirect to="/itdashboard" />;
    }
    else if(userRole === 'operator'){
        return <Redirect to="/operatordashboard" />;
    }
    else if(userRole === 'admin'){
        return <Redirect to="/itdashboard" />;
    }


    return (
      <div>
        {errorMessage}
        {this.props.loading ? (
            <h1>Loading....</h1>

        ) : (
          <form onSubmit={this.onSubmit} className="login-form">
                <div className="p-field">
                    <label>EMAIL</label>
                    <input
                    className="form-control"
                    type="text"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                    className="form-control"
                    type="password"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                    />
                </div>
                <button
                >
                Login
                </button>

          </form>
        )}
      </div>
    );
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
)(Login);
