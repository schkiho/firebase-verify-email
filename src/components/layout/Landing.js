import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='container text-center my-5'>
      <h1 className='my-5'>Welcome to Verify Your Email</h1>
      <div className='d-flex justify-content-center'>
        <Link to='/signin' className='btn btn-lg btn-primary mr-2'>
          Login
        </Link>
        <Link to='signup' className='btn btn-lg btn-primary ml-2'>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Landing;
