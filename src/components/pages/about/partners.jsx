import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

import { partnersList } from '../../../constants';

const PartnersList = () => {
  return (
    <Row className="content-wrapper founders-block">
      <h1 className="title-block-text">Партнери</h1>
      {partnersList.map(({ link, image }) => (
        <StyledCard 
          className="founder-card" 
          as="a" 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Card.Img variant="top" src={image} />
        </StyledCard>
      ))}
    </Row>
  );
};

const StyledCard = styled(Card)`
  cursor: pointer;
  transition: .3s;
  box-shadow: 0px 3px 19px 0px rgba(0,0,0,0.45);
  &:hover {
    box-shadow: 0px 3px 30px 0px rgba(0,0,0,0.85);
  }
`;

export default PartnersList;