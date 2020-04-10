import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyEmail } from '../../store/actions/authAction';

const VerifyEmail = ({ auth, sendVerification }) => {
  if (auth.uid && auth.emailVerified) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div className='container text-center mt-5'>
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title mb-4'>Please Verify Your Email</h3>
          <p className='card-text'>
            We send a link to {auth.email}, please check your inbox and click
            the link to verify your email address.
          </p>
          <p>
            If the link in your email is expired click the Refresh button below
            to refresh the link.
          </p>
          <button
            className='btn btn-lg btn-primary'
            onClick={() => sendVerification()}
          >
            Refresh
          </button>
          <Link
            to='/signin'
            className='btn btn-lg btn-primary ml-2'
            disabled={!auth.emailVerified}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendVerification: () => dispatch(verifyEmail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
