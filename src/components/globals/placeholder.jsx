import React from 'react';

const Placeholder = ({ message, show }) => {
  if (!show) return null;

  return (
    <div className="empty-content">
      <div className="empty-content__image" />
      <p>{message}</p>
    </div>
  )
};

Placeholder.defaultProps = {
  message: '',
  show: false,
}

export default Placeholder;