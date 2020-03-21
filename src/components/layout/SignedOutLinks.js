import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <NavLink to='/signup' className='nav-link'>
          Signup
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/signin' className='nav-link'>
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
