import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SignUp extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className='container my-5'>
        <form onSubmit={this.handleSubmit}>
          <h1 className='text-primary'>Login</h1>
          <h5>Sign Into Your Account</h5>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
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
            <button type='submit' className='btn btn-primary btn-lg mb-3'>
              Login
            </button>
          </div>
        </form>
        <p>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    );
  }
}

export default SignUp;
