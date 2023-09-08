import React from 'react';
import Row from 'react-bootstrap/Row';

import FounderCard from './card';

const TeamMemberCards = ({ list, text }) => {
  return (
    <Row className="content-wrapper founders-block">
      <h1 className="title-block-text">{text}</h1>
      {list.map(({ name, text, image, link }) => (
        <FounderCard
          link={link}
          key={name}
          name={name}
          text={text}
          image={image}
        />
      ))}
    </Row>
  );
};

export default TeamMemberCards;
