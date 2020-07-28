import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { signIn } from "../../store/actions/authAction";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    console.log(this.state);
    const { auth, authError } = this.props;
    if (auth.uid && !auth.emailVerified) {
      return <Redirect to="/verify-email" />;
    } else if (auth.uid && auth.emailVerified) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="container my-5">
        <form onSubmit={this.handleSubmit}>
          <h1 className="text-primary">Login</h1>
          <h5>Sign Into Your Account</h5>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg mb-3">
              Login
            </button>
          </div>
          <div className="text-center text-danger">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <p>
          Forgot your password? <Link to="/recover">Recover Password</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
