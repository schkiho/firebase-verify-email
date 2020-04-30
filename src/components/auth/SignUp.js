import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { signUp } from '../../store/actions/authAction';

export class SignUp extends Component {
  state = {
    email: '',
    password: '',
    password2: '',
    firstName: '',
    lastName: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { password, password2 } = this.state;
    if (password !== password2) {
      alert('Both passwords must be the same please try again.');
    } else {
      this.props.signUp(this.state);
    }
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/verify-email' />;
    return (
      <div className='container  my-5'>
        <form onSubmit={this.handleSubmit}>
          <h1 className='text-primary'>Sign Up</h1>
          <h5>Create Your Account</h5>
          <div className='form-group'>
            <label htmlFor='firstName'>Firstname</label>
            <input
              type='text'
              id='firstName'
              className='form-control'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>LastName</label>
            <input
              type='text'
              id='lastName'
              className='form-control'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='email'
              className='form-control'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              className='form-control'
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password2'>Confirm Password</label>
            <input
              type='password'
              id='password2'
              className='form-control'
              onChange={this.handleChange}
            />
          </div>
          <button type='submit' className='btn btn-primary btn-block mb-3'>
            Sign Up
          </button>
          <div className='text-center text-danger'>
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
        <p>
          Already have an account? <Link to='/signin'>Sign In</Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
