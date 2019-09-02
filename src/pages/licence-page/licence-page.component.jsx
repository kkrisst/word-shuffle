import React from 'react';
import { auth, upgradeUserLicence } from '../../firebase/firebase.utils';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './licence-page.styles.scss';

const LicencePage = () => {

  const price = 19;

  const upgradeLicence = token => {
    const user = auth.currentUser;
    console.log(user);

    if (user) {
      upgradeUserLicence(user);
    } else {
      console.error('No user is loggin in currently.');
    }
  }

  return (
    <div className='licence-page'>
      <div className='licence-label'>BENEFITS OF UPGRADING TO PRO:</div>
      <div className='middle-block'>
        <div className='benefit-list'>
          <div className='benefit-line'>
            <FontAwesomeIcon
              style={{ color: 'green' }}
              icon="check" />
            <div className='benefit-text'>Gain access to the complete lesson catalogue</div>
          </div>
          <div className='benefit-line'>
            <FontAwesomeIcon
              style={{ color: 'green' }}
              icon="check" />
           <div className='benefit-text'>Save your progress, continue where you left off</div>
          </div>
          <div className='benefit-line'>
            <FontAwesomeIcon
              style={{ color: 'green' }}
              icon="check" />
            <div className='benefit-text'>Unlock explanation sections for every lesson</div>
          </div>
          <div className='benefit-line'>
            <FontAwesomeIcon
              style={{ color: 'green' }}
              icon="check" />
            <div className='benefit-text'>Get every new lesson added in the future</div>
          </div>
        </div>
        <div className='upgrade-block'>
          <div className='price'><FontAwesomeIcon icon="euro-sign" />{price} / month</div>
          <div className='upgrade-button'>
            <StripeCheckoutButton
              price={price}
              onToken={upgradeLicence}
            />
          </div>
          <div className='stripe-label'>via Stripe</div>
        </div>
      </div>
      <div className='card-info'>
        <div className='not-implemented-info'>This feature is not live yet. To try PRO, use the following example credit card information:</div>
        <div className='example-card-info'>4242 4242 4242 4242 - Expiry: 01/20 - CVV: 123</div>
      </div>
    </div>
  );
};

export default LicencePage;