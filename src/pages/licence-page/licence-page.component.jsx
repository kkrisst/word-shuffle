import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth, upgradeUserLicence } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './licence-page.styles.scss';

const LicencePage = ({ currentUser, match, history }) => {
  const price = 19;

  const upgradeLicence = token => {
    const user = auth.currentUser;

    if (user) {
      upgradeUserLicence(user);
      history.push('/lessons');
    } else {
      console.error('No user is loggin in currently.');
    }
  }

  return (
    <div className='licence-page'>
      {
        currentUser ?
        (
          <div className='logged-in-wrapper'>
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
        )
        : (
            <div className='main-button-container'>
              <Link className='main-button' to='/signin'>Sign up</Link>
            </div>
          )
      } 
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(LicencePage);