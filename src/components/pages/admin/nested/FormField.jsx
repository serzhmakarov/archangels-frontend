import React from 'react';
import Form from 'react-bootstrap/Form';

const FormField = ({
  resize, 
  name, 
  label, 
  as, 
  type, 
  rows = 1, 
  placeholder,
  required = false,
  register,
}) => {
  return (
    <Form.Group
      controlId="formName"
      className="admin-create-form-page__field-wrapper"
    >
      <Form.Label>
        {label} {required && (<p className="required-star">*</p>)}
      </Form.Label>
      <Form.Control
        type={type}
        style={{ resize }}
        required={Boolean(required)}
        as={as}
        placeholder={placeholder || `Напиши ${label.toLowerCase()} сюди...`}
        rows={rows}
        {...register(name, { required: required ? `Заповніть поле ${label.toLowerCase()}` : false })}
      />
    </Form.Group>
  );
};

export default FormField;