import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to='/' className='navbar-brand'>
          Verify Email
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Navbar);
