import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SignUp extends Component {
  state = {
    email: '',
    password: ''
  };
  render() {
    return (
      <div className='container my-5'>
        <form>
          <h1 className='text-primary'>Login</h1>
          <h5>Sign Into Your Account</h5>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' className='form-control' />
          </div>
          <button type='submit' className='btn btn-primary btn-lg mb-3'>
            Login
          </button>
        </form>
        <p>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    );
  }
}

export default SignUp;
