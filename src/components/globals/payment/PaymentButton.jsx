import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { t } from 'i18next';

import { getFondyCheckoutURL } from '../../../api';

const PaymentButton = () => {
  const [loading, setLoading] = useState(false);

  const handlePaymentClick = () => {
    setLoading(true);

    getFondyCheckoutURL()
      .then(res => {
        if (res.checkout_url) window.open(res.checkout_url, '_blank', 'noreferrer');

        setLoading(false);   
      })
      .catch(err => {
        setLoading(false);
      })
  };

  return (
    <div>
      <Button 
        variant="outline-danger"
        className="archangels-btn payment-btn" 
        onClick={handlePaymentClick}
      >
        {loading ? (<Spinner animation="border" />) : t('home.donate')}
      </Button>
    </div>
  );
 }

 export default PaymentButton;