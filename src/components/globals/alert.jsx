import React from 'react';

const Alert = ({ message, color }) => {
  if (!message) return null;

  return (
    <div className="alert-message" style={{ color }}>
      <p>{message}</p>
    </div>
  )
};

Alert.defaultProps = {
  message: '',
  color: 'green'
}

export default Alert;