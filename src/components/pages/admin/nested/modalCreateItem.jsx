import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { actionTypes } from '../../../../constants/actionTypes';
import { adminTableFields } from '../constants';

const initialFormData = {
  name: '',
  short_description: '',
  long_description: '',
  date: '',
  photo: null,
  photo_url: null,
  feedback: '',
}

const ModalCreateItem = ({ 
  isModalShow, 
  handleCreateClick, 
  loading,
  dispatch,
  itemForUpdate,
 }) => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (itemForUpdate) setFormData(itemForUpdate);
  }, [itemForUpdate]);

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

  const actionTitleName = itemForUpdate ? 'Редагувати' : 'Cтворити';

  return (
    <Modal 
      size="lg"
      show={isModalShow} 
      onHide={handleClose} 
      className="admin-create-form-page__modal"
    >
      <Form onSubmit={handleSubmit} className="admin-create-form-page__form-wrapper">
        <h1>{actionTitleName} запис {formData.id ? `#${formData.id}` : ''}</h1>
        {adminTableFields.map(({ resize, key, label, as, type, rows = 1 }) => (
          <Form.Group
            controlId="formName"
            className="admin-create-form-page__field-wrapper"
            key={key}
          >
            <Form.Label>{label} <p className="required-star">*</p></Form.Label>
            <Form.Control
              type={type}
              style={{ resize }}
              required
              name={key}
              as={as}
              placeholder={`Напиши ${label.toLowerCase()} сюди...`}
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
  );
};

export default ModalCreateItem;