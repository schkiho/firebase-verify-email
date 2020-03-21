import React, { Component } from 'react';

export class Dashboard extends Component {
  render() {
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

export default Dashboard;
