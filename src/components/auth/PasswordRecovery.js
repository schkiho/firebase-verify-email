import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recoverPassword } from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';

export class PasswordRecovery extends Component {
  state = {
    email: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.recoverPassword(this.state);
    this.props.history.push('/signin');
  };

  render() {
    const { authError } = this.props;

    return (
      <div className='container text-center mt-5'>
        <div className='card bg-dark text-light'>
          <div className='card-body'>
            <h3 className='card-title mb-4'>Recover Your Password</h3>
            <h4 className='card-text'>
              Please type in your email to recover your password
            </h4>
            <form onSubmit={this.handleSubmit}>
              <input
                type='email'
                id='email'
                className='form-control my-4'
                onChange={this.handleChange}
                placeholder='Type your email...'
              />

              <button type='submit' className='btn btn-lg btn-primary'>
                Recover Password
              </button>
            </form>
          </div>
        </div>
        <div className='text-center text-danger'>
          {authError ? <p>{authError}</p> : null}
        </div>
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
    recoverPassword: (credential) => dispatch(recoverPassword(credential)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecovery);
