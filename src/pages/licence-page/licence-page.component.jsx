import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './licence-page.styles.scss';

const LicencePage = () => {

  return (
    <div className='licence-page'>
      <div className='licence-label'>BENEFITS OF UPGRADING TO PRO:</div>
      <div className='middle-block'>
        <div className='benefit-list'>
          <div className='benefit-line'>
            <FontAwesomeIcon style={{ marginRight: '10px' }} icon="check" />
            <div>Gain access to the complete lesson catalogue</div>
          </div>
          <div className='benefit-line'>
            <FontAwesomeIcon style={{ marginRight: '10px' }} icon="check" />
           <div>Save your progress, continue where you left off</div>
          </div>
          <div className='benefit-line'>
            <FontAwesomeIcon style={{ marginRight: '10px' }} icon="check" />
            <div>Unlock explanation sections for every lesson</div>
          </div>
          <div className='benefit-line'>
            <FontAwesomeIcon style={{ marginRight: '10px' }} icon="check" />
            <div>Get every new lesson added in the future</div>
          </div>
        </div>
        <div className='upgrade-block'>
          <div className='price'><FontAwesomeIcon style={{  }} icon="euro-sign" />19.00 / month</div>
          <div className='upgrade-button'></div>
          <div classname='stripe-label'>via Stripe</div>
        </div>
      </div>
      <div className='not-implemented-info'>This feature is not live yet. To try PRO, use the following example credit card information:</div>
      <div className='example-card-info'>4242 4242 4242 4242 - Expiry: 01/20 - CVV: 123</div>
    </div>
  );
};

export default LicencePage;