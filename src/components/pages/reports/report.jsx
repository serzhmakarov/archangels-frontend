import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Report({ name, id }) {
  const reportLink = `/reports/${id}`;

  return (
    <div className="reports-list-item" key={id}>
      <div className="report-name">{name}</div>
      <Button 
        variant="outline-danger" 
        className="archangels-btn"
        as="a"
        href={reportLink}
      >
        Читати
      </Button>
    </div>
  );
}