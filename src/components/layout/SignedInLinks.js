import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../../store/actions/authAction';

const SignedInLinks = ({ signOut }) => {
  return (
    <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
        <Link to='/dashboard' className='nav-link'>
          Dashboard
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/' className='nav-link' onClick={signOut}>
          Log Out
        </Link>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
