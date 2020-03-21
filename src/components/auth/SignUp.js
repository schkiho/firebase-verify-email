import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };
  render() {
    return (
      <div className='container  my-5'>
        <form>
          <h1 className='text-primary'>Sign Up</h1>
          <h5>Create Your Account</h5>
          <div className='form-group'>
            <label htmlFor='firstName'>Firstname</label>
            <input type='text' id='firstName' className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>LastName</label>
            <input type='text' id='lastName' className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input type='email' id='email' className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' className='form-control' />
          </div>
          <button type='submit' className='btn btn-primary btn-block mb-3'>
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to='/signin'>Sign In</Link>
        </p>
      </div>
    );
  }
}

export default SignUp;
