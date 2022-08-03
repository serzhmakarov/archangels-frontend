import React from 'react';
import Row from 'react-bootstrap/Row';

import FounderCard from './card';
import { founders } from '../../../constants';

const Founders = () => {
  return (
    <Row className="content-wrapper founders-block">
      <h1 className="title-block-text">Засновники</h1>
      {founders.map(({ name, text, image }) => (
        <FounderCard 
          key={name}
          name={name}
          text={text}
          image={image}
        />
      ))}
    </Row>
  );
};

export default Founders;