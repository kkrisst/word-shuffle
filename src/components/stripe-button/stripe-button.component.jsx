import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Y08aPiBSBzbOSjoeU6PaMUzO00eBzEs8bI';

  const onToken = token => {
    console.log(token);
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Word Shuffle co.'
      billingAddress
      shippingAddress
      image=''
      description={`total: €${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;