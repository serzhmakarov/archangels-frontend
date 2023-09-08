import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import DefaultPartnerImage from '../../../assets/images/boxes-placeholer.jpeg';
import LazyBackground from '../../../_helpers/LazyBackground';

const PartnerCard = ({
  id,
  short_description,
  photo,
  name,
  projects_count,
}) => (
  <Card className="partners-list-item">
    <Row>
      <Col xs={12}>
        <LazyBackground
          className="card-image"
          src={photo || DefaultPartnerImage}
        />
      </Col>

      <Col xs={12}>
        <Card.Body>
          <div className="card-info">
            <Card.Title>{name}</Card.Title>
            <Card.Text className="card-projects">
              Кількість спільних проектів: {projects_count}
            </Card.Text>
            <Card.Text>{short_description}</Card.Text>
          </div>
          <Button
            variant="outline-danger"
            className="archangels-btn"
            as="a"
            href={`/partners/${id}`}
          >
            Проекти
          </Button>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);

PartnerCard.propTypes = {
  id: PropTypes.number.isRequired,
  projects_count: PropTypes.number.isRequired,
  short_description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

export default PartnerCard;
