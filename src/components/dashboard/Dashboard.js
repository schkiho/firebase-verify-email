import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class Dashboard extends Component {
  render() {
    const { auth } = this.props;
    if (auth.uid && !auth.emailVerified) return <Redirect to='verify-email' />;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col text-center mt-4'>
            <h1 className='text-primary mb-4'>Flyer</h1>
          </div>
          <div className='col text-center mt-4'>
            <h1 className='text-primary mb-4'>Gallery</h1>
          </div>
        </div>
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
