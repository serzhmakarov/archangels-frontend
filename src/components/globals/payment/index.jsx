import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { t } from 'i18next';
import PaymentFormModal from './PaymentFormModal';

const FondyPayment = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const onCloseModal = () => setIsOpen(false);

  const onOpenModal = () => setIsOpen(true);

  return (
    <div className="fondy-payment-form">
      <Button 
        variant="danger"
        className="donate-btn" 
        onClick={onOpenModal}
      >
        {t('home.donate')}
      </Button>
      <PaymentFormModal 
        isOpen={isOpen}
        onCloseModal={onCloseModal} 
      />
    </div>
  );
};

export default FondyPayment;