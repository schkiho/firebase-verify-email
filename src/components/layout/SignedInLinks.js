import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <Link to='/' className='nav-link'>
          Dashboard
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/' className='nav-link'>
          Log Out
        </Link>
      </li>
    </ul>
  );
};

export default SignedInLinks;
