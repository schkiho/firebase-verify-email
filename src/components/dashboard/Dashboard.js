import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

export class Dashboard extends Component {
  render() {
    const { auth } = this.props;
    if (auth.uid && !auth.emailVerified) return <Redirect to='verify-email' />;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col text-center mt-4'>
            <Link to='/flyer-upload' className='btn btn-lg btn-primary my-2'>Flyer Upload</Link>
            <h1 className='text-primary mb-4'>Flyer</h1>
          </div>
          <div className='col text-center mt-4'>
          <Link to='/album-upload' className='btn btn-lg btn-primary my-2'>Album Upload</Link>
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
