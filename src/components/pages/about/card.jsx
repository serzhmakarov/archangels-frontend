import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import LazyBackground from '../../../_helpers/LazyBackground';

const FounderCard = ({ name, text, image, link }) => (
  <StyledCard className="founder-card" link={link}>
    <LazyBackground src={image} className="card-image" />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      {text && <Card.Text>{text}</Card.Text>}
    </Card.Body>
  </StyledCard>
);

const StyledCard = styled(Card)`
  cursor: ${(props) => (props.link ? 'pointer' : 'inherit')};
  transition: 0.3s;
  box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.45);
  &:hover {
    box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.85);
  }
`;

export default FounderCard;
