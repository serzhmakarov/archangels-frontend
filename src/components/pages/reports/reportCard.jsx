import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import DefaultPostImage from '../../../assets/images/post_image_default.jpg'
import NormalizedDate from '../../globals/NormalizedDate';

const ReportCard = ({ id, date, short_description, photo, name }) => (
  <Card className="news-list-item">
    <Row>
      <Col xs={12}>
        <div 
          className="card-image" 
          style={{ backgroundImage: `url(${photo || DefaultPostImage})` }}
        />
      </Col>

      <Col xs={12}>
        <Card.Body>
          <div className="card-info">
            <Card.Title>{name}</Card.Title>
            <NormalizedDate date={date}/>
            <Card.Text>{short_description}</Card.Text>
          </div>
          <Button 
            variant="outline-danger" 
            className="archangels-btn"
            as={NavLink}
            to={{ 
              pathname: `/reports/${id}`, 
              state: { message: name } 
            }}
          >
            Читати
          </Button>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);

ReportCard.propTypes = {
  id: PropTypes.number.isRequired,
  short_description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

export default ReportCard;