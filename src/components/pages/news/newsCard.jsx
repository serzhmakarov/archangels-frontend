import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const NewsCard = ({ date, description, image, link, name }) => {
  return (
    <Card style={{ width: '18rem' }} className="news-list-item">
      <Col xs={4}>
        <Card.Img variant="top" src={image} />
      </Col>

      <Col xs={8}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p className="date">{date}</p>
          <Card.Text>{description}</Card.Text>
            <Button 
              variant="outline-danger" 
              className="archangels-btn"
              as="a"
              href={link}
            >
              Читати
            </Button>
        </Card.Body>
      </Col>
    </Card>
  );
};

export default NewsCard;