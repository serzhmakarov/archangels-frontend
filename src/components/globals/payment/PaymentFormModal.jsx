import React, { useState } from 'react';
import { 
  Form, 
  Container, 
  Modal, 
  Button,
  Spinner,
  FormGroup,
  FormLabel,
  ButtonGroup,
  ToggleButton,
  InputGroup
} from 'react-bootstrap';
import useApi from './useApi';
// import { t } from 'i18next';

const currencies = {
  UAH: { 
    defaultAmounts: [10, 100, 500],
    icon: '\u20B4',
  },
  USD: { 
    defaultAmounts: [1, 5, 20],
    icon: '\u0024',
  },
  EUR: { 
    defaultAmounts: [1, 5, 20],   
    icon: '\u20AC',
  },
};

const defaultCurrency = 'UAH';

const PaymentFormModal = ({ onCloseModal, isOpen }) => {
  const { loading, getCheckoutFondyUrl } = useApi();
  const [amount, setAmount] = useState(currencies[defaultCurrency].defaultAmounts[0]);
  const [customAmount, setCustomAmount] = useState('');
  const [currency, setCurrency] = useState(defaultCurrency);
  const [showAmountField, setShowAmountField] = useState(false);

  const onCurrencyChange = (e) => {
    setShowAmountField(false);
    console.log(e.target.value);
    setCurrency(e.target.value);
    setCustomAmount('');
    setAmount(currencies[e.target.value].defaultAmounts[0])
  };

  const handleAmountChange = (e) => {
    const newValue = e.target.value;

    if (newValue === 'other') {
      setShowAmountField(true);
      return;
    }

    setCustomAmount('');
    setShowAmountField(false)
    setAmount(Number(newValue));
  };

  const handleCustomAmountChange = (e) => {
    const newValue = e.target.value;

    setCustomAmount(newValue ? Number(newValue) : newValue);
  };

  const onRequest = ({ amount, currency }) => {
    getCheckoutFondyUrl({ amount, currency })
      .then((res) => console.log(res));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (showAmountField) {
      onRequest({ amount: customAmount, currency });
      console.log(`Currency: ${currency}, Amount: ${customAmount}`);
    } else {
      onRequest({ amount, currency });
      console.log(`Currency: ${currency}, Amount: ${amount}`);
    }
  };

  const currentCurrency = currencies[currency];
  return (
    <Modal 
      show={isOpen} 
      onHide={onCloseModal}
      className="payment-form-modal"
    >
     <Modal.Header closeButton>
        <h5>
          <b>Введіть бажану суму</b>
        </h5>
      </Modal.Header>
      <Container className="currency-form">
        <Form onSubmit={handleSubmit}>
        <FormGroup className="form-group">
          <FormLabel>Валюта</FormLabel>
          <ButtonGroup className="button-group">
          {Object.keys(currencies).map((curr) => (
            <ToggleButton
              key={curr}
              id={`currency-${curr}`}
              type="radio"
              variant={'outline-danger'}
              name="currency"
              value={curr}
              checked={curr === currency}
              onChange={onCurrencyChange}
            >
              {currencies[curr].icon} {curr}
            </ToggleButton>
          ))}
        </ButtonGroup>
        </FormGroup>
        <FormGroup className="form-group">
          <FormLabel>Оберіть бажану суму</FormLabel>
          <ButtonGroup className="button-group">
            {currentCurrency.defaultAmounts.map((amt) => (
              <ToggleButton
                key={amt}
                id={`amount-${amt}`}
                type="radio"
                variant={'outline-danger'}
                value={amt}
                name="amount"
                checked={!showAmountField && amt === Number(amount)}
                onChange={handleAmountChange}
               >
                {amt} {currentCurrency.icon}
              </ToggleButton>
             ))}
              <ToggleButton
                id="other-amount"
                type="radio"
                variant={'outline-danger'}
                value="other"
                checked={showAmountField}
                onChange={handleAmountChange}
               >
                Інша сума
              </ToggleButton>
        </ButtonGroup>
          {showAmountField && (
            <FormGroup className="form-group custom-amount">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  {currentCurrency.icon}
                </InputGroup.Text>
                <Form.Control
                  type="number"
                  name="customAmount"
                  id="customAmount"
                  placeholder="Введіть бажану суму"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                />
              </InputGroup>
            </FormGroup>
          )}
        </FormGroup>
        <Modal.Footer>
            <Button
              variant="danger"
              className="payment-btn" 
              type="submit"
            >
              {loading ? (<Spinner animation="border" />) : 'Підтвердити'}
            </Button>
          </Modal.Footer>
        </Form>
      </Container>
    </Modal>
  );
};

export default PaymentFormModal;
