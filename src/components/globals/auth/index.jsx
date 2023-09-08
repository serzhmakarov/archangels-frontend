import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import useApi from './useApi';

const Auth = ({ open = false, setIsLoggedIn }) => {
  const { loading, error, onLogin } = useApi();

  const [showModal, setShowModal] = useState(open);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (e) => setEmail(e.target.value);

  const onPasswordChange = (e) => setPassword(e.target.value);

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({ user: { email, password } }).then(() => setIsLoggedIn(true));
  };

  console.log(error);

  return (
    <Modal
      className="authorization-modal"
      show={showModal}
      onHide={handleCloseModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Authorization</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <p className="error-text">{error.message}</p>}
        <Form onSubmit={handleSubmit} className="authorization-modal__form">
          <Form.Group
            controlId="formBasicEmail"
            className="authorization-modal__form-group"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="Enter email"
              value={email}
              onChange={onEmailChange}
            />
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            className="authorization-modal__form-group"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordChange}
            />
          </Form.Group>

          <Button
            className="authorization-modal__form-submit-btn"
            variant="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Auth;
