import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

import { adminTableFields } from '../constants';
import useApi from '../helpers/useApi';

const CreatePost = ({ loading, isSuccess, dispatch}) => {
  const { createPostRequest } = useApi({ dispatch });

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    photo: null
  });

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'file' ? target.files[0] : target.value;
    
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    createPostRequest(formData);
  }

  return (
    <Container className="admin-create-form-page">
      <h1>#Create Post</h1>
      {isSuccess && (     
        <p className="success-message">The post was successfully created and added to the pages.</p>
      )}
      <Form onSubmit={handleSubmit}>
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
        <Button 
          variant="primary" 
          type="submit" 
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Submit'}
        </Button>
      </Form>
    </Container>
  );
}

export default CreatePost;