import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/classroom.svg';
import './header.styles.scss';

// TODO add currentUser from store
const Header = () => {
  const currentUser = true;

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
  
      <div className='nav-list'>
        {
          currentUser &&
            <Link className='nav-item' to='/lessons'>Lessons</Link>
        }
  
        <Link className='nav-item' to='/contact'>Contact</Link>
  
        {
          currentUser
          ? <div className='nav-item'>Sign out</div>
          : <Link className='nav-item' to='/signin'>Sign in</Link>
        }
      </div>
    </div>
  );
};

export default Header;