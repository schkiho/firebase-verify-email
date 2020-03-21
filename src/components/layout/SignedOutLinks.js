import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <Link to='/signup' className='nav-link'>
          Signup
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/signin' className='nav-link'>
          Login
        </Link>
      </li>
    </ul>
  );
};

export default SignedInLinks;
