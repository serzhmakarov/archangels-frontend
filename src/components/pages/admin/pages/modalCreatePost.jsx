import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { actionTypes } from '../../../../constants/actionTypes';
import { adminTableFields } from '../constants';

const initialFormData = {
  name: '',
  description: '',
  date: '',
  photo: null
}

const ModalCreateItem = ({ 
  activeTab,
  isModalShow, 
  handleCreateClick, 
  loading,
  dispatch,
 }) => {
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'file' ? target.files[0] : target.value;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleClose = () => {
    dispatch({ type: actionTypes.closeCreationModal });
    setFormData(initialFormData);
  };

  const handleOpen = () => {
    dispatch({ type: actionTypes.openCreationModal });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleCreateClick(formData)
      .then(() => handleClose());
  }

  const targetName = activeTab.toLowerCase().slice(0, activeTab.length - 1);

  return (
    <>
      <Button 
        variant="outline-success" 
        onClick={handleOpen}
      >
        + Add
      </Button>
      <Modal show={isModalShow} onHide={handleClose}>
        <Form onSubmit={handleSubmit} className="admin-create-form-page__form-wrapper">
          <h1>Create new {targetName}</h1>
          {adminTableFields.map(({ key, label, type, rows = 1 }) => (
            <Form.Group 
              controlId="formName"
              className="admin-create-form-page__field-wrapper"
              key={key}
            >
              <Form.Label>{label}</Form.Label>
              <Form.Control
                type={type}
                name={key}
                rows={rows}
                value={type !== 'file' ? formData[key] : null}
                onChange={handleChange}
              />
          </Form.Group>
          ))}
          <div className="admin-create-form-page__action-buttons">
            <Button 
              variant="secondary" 
              type="button" 
              className="submit-button"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button 
              variant="primary" 
              type="submit" 
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Submit'}
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCreateItem;