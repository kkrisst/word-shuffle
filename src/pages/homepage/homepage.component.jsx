import React from 'react';

// import { ReactComponent as Logo } from '../../assets/dose-media.jpg';
import LandingBackground from '../../assets/dollar-gill.jpg';
// import { ReactComponent as LandingBackground } from '../../assets/lukas-blazek';
// import { ReactComponent as LandingBackground } from '../../assets/sharon-mccutcheon';
// import { ReactComponent as LandingBackground } from '../../assets/dollar-gill';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>

    <div className='landing-image-container'>
      <img
        src={LandingBackground}
        className='landing-background'
        alt='homepage main image'
      />
      <div className='title'>WORD SHUFFLE</div>
    </div>

    
  </div>
);

export default HomePage;