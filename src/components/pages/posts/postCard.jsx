import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import normalizeDate from '../../../_helpers/normalizeDate';
import DefaultPostImage from '../../../assets/images/post_image_default.jpg'

const PostCard = ({ id, date, short_description, photo, name }) => (
  <Card className="news-list-item">
    <Row>
      <Col xs={4}>
        <Card.Img variant="top" src={photo} />
      </Col>

      <Col xs={8}>
        <Card.Body>
          <div className="card-info">
            <Card.Title>{name}</Card.Title>
            <p className="date">{normalizeDate(date)}</p>
            <Card.Text>{short_description}</Card.Text>
          </div>
          <Button 
            variant="outline-danger" 
            className="archangels-btn"
            as="a"
            href={`/news/${id}`}
          >
            Читати
          </Button>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);
PostCard.defaultProps = {
  photo: DefaultPostImage
};


PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostCard;