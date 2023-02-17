import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

import { adminTableFields } from '../constants';
import usePostRequest from '../helpers/usePostRequest';

const CreatePost = () => {
  const { loading, isSuccess, callback } = usePostRequest();

  const [data, setData] = useState({
    name: '',
    description: '',
    date: '',
    photo: null
  });

  function handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'file' ? target.files[0] : target.value;
    
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    callback(data);
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
              value={type !== 'file' ? data[key] : null}
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