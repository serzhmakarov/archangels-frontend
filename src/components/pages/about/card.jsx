import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import useImageLoad from '../../../hooks/useImageLoad';

const FounderCard = ({ name, text, image, link }) => {
  const { loaded, handleImageLoaded, PlaceholderImage } = useImageLoad();
  return (
    <StyledCard className="founder-card" link={link}>
      <Card.Img 
        variant="top" 
        src={loaded ? image : PlaceholderImage} 
        onLoad={handleImageLoaded}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {text && (<Card.Text>{text}</Card.Text>)}
      </Card.Body>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  cursor: ${props => props.link ? 'pointer' : 'inherit'};
  transition: .3s;
  box-shadow: 0px 3px 19px 0px rgba(0,0,0,0.45);
  &:hover {
    box-shadow: 0px 3px 30px 0px rgba(0,0,0,0.85);
  }
`;

export default FounderCard;