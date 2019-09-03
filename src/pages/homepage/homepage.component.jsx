import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

// import { ReactComponent as Logo } from '../../assets/dose-media.jpg';
import LandingBackground from '../../assets/dollar-gill2.jpg';
// import { ReactComponent as LandingBackground } from '../../assets/lukas-blazek';
// import { ReactComponent as LandingBackground } from '../../assets/sharon-mccutcheon';
// import { ReactComponent as LandingBackground } from '../../assets/dollar-gill';

import Screen1 from '../../assets/screen3.png';
import Screen2 from '../../assets/screen5.png';

import './homepage.styles.scss';

const HomePage = ({ currentUser }) => {

  return (
    <div className='homepage'>

      <div className='landing-image-container'>
        <div
          style={{
          backgroundImage: `url(${LandingBackground})`
        }}
          className='landing-image'
        />
        <div className='title'>WORD SHUFFLE</div>
        <div className='sub-title'>The Hungarian word order practice application</div>
        <a className='learn-more' href='#info-box'>CLICK TO LEARN MORE</a>
      </div>

      <div className='main-content'>
        <div id='info-box'>
          <span className='intro'>Word Shuffle helps you...</span>
          <ul>
            <li>practice building sentences</li>
            <li>teach you about the word order</li>
            <li>help you understand the role of words</li>
            <li>strengthen your overall skill</li>
          </ul>
          <span className='outro'>in the Hungarian language!</span>
        </div>
        
        <div className='main-button-container'>
          {
            currentUser
            ? <Link className='main-button' to='/lessons'>Go to your lessons</Link>
            : <Link className='main-button' to='/signin'>Sign up</Link>
          }
        </div>
      </div>
      
      <div className='screenshots'>
        <div className='screenshot-container'>
          <div className='description-container'>
            <div className='description'>Practice your Hungarian with a huge catalogue of lessons</div>
          </div>
          <img className='screenshot-image' src={Screen1} alt='screenshot 1'></img>
        </div>
        <div className='screenshot-container'>
          <div className='description-container'>
            <div className='description'>Studying wid Word Shuffle is fun: drag cards to form sentences</div>
          </div>
          <img className='screenshot-image' src={Screen2} alt='screenshot 2'></img>
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(HomePage);