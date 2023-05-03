import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Placeholder = ({ message, show }) => {
  if (!show) return null;

  return (
    <div className="empty-content">
      <div className="empty-content__image">
        <Spinner animation="border" />
      </div>
      <p>{message}</p>
    </div>
  )
};

Placeholder.defaultProps = {
  message: '',
  show: false,
}

export default Placeholder;