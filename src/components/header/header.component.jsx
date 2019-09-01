import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/classroom.svg';
import './header.styles.scss';

// TODO add currentUser from store
const Header = ({ currentUser }) => {
console.log(currentUser);
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
  
      <div className='nav-list'>
        {
          currentUser &&
            <div className='greet-and-lessons'>
              <div className='greet-user'>Hello {currentUser.displayName}!</div>
              <Link className='nav-item' to='/lessons'>Lessons</Link>
            </div>
        }
  
        <Link className='nav-item' to='/contact'>Contact</Link>
  
        {
          currentUser
          ? <div className='nav-item' onClick={() => auth.signOut()}>Sign out</div>
          : <Link className='nav-item' to='/signin'>Sign in</Link>
        }
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);