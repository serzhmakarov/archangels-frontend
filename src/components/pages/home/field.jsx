import React from 'react';
import Form from 'react-bootstrap/Form';
import { Controller } from 'react-hook-form';

const Field = ({ 
  control,
  label, 
  key, 
  type, 
  as, 
  hint, 
  placeholder, 
  required,
  name,
}) => {
  return (
    <Form.Group 
      key={key}
      controlId={key}
      className="mb-3" 
    >
      <Form.Label>{label}</Form.Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Form.Control 
            {...field}
            as={as}
            type={type} 
            placeholder={placeholder}
            required={required}
          />
        )}
      />
      {hint && (
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      )}
      <Form.Control.Feedback type="invalid">
        Please choose a username.
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default Field;