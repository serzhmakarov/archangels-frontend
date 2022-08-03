import React from 'react';
import Card from 'react-bootstrap/Card';

const FounderCard = ({ name, text, image }) => {
  return (
    <Card style={{ width: '18rem' }} className="founder-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FounderCard;