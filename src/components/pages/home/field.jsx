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
  minLength,
  maxLength,
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
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
            required={required}
          />
        )}
      />
      {hint && (
        <Form.Text className="text-muted">
          Ми ніколи не передамо вашу електронну пошту нікому іншому.
        </Form.Text>
      )}
    </Form.Group>
  );
};

Field.defaultProps = {
  minLength: 5,
  maxLength: 70,
  required: true,
  as: 'input',
  hint: '',
  placeholder: '',
  label: '',
  name: '',
  type: '',
};

export default Field;