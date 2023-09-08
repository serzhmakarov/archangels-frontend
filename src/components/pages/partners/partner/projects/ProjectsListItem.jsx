import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import LazyBackground from '../../../../../_helpers/LazyBackground';

import DefaultProjectImage from '../../../../../assets/images/boxes-placeholer.jpeg';
import NormalizedDate from '../../../../globals/NormalizedDate';

const ProjectsList = ({
  date,
  fullDescription,
  name,
  photo,
  shortDescription,
}) => (
  <Card className="projects-list-item">
    <Row>
      <Col xs={12}>
        <LazyBackground
          className="card-image"
          src={photo || DefaultProjectImage}
        />
      </Col>

      <Col xs={12}>
        <Card.Body>
          <div className="card-info">
            <Card.Title>{name}</Card.Title>
            <NormalizedDate date={date} />
            <Card.Text className="card-description">
              {shortDescription}
            </Card.Text>
            <Card.Text className="card-description">
              {fullDescription}
            </Card.Text>
          </div>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);

ProjectsList.propTypes = {
  shortDescription: PropTypes.string.isRequired,
  fullDescription: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

export default ProjectsList;
