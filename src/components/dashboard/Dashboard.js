import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class Dashboard extends Component {
  render() {
    const { auth } = this.props;
    if (auth.uid && !auth.emailVerified) return <Redirect to='verify-email' />;
    return (
      <div className='text-center mt-4'>
        <h1 className='text-primary'>
          Welcome to our Dashboard as a verified User
        </h1>
        <h5>
          When you see this page you're successfully logged in with a verified
          email address
        </h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Dashboard);
