import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Placeholder from '../../globals/placeholder';
import PartnersList from './partnersList';
import useApi from '../../../hooks/useApi';
import { getPartners } from '../../../api';

const Partners = () => {
  const {  
    loading, 
    isLoaded, 
    response,
    isDataEmpty
  } = useApi({ callback: getPartners });
  return (
    <Container className="partners-page">
      <Row className="about-page__title-block">
        <h1 className="title-block-text">Партнери</h1>
      </Row>
    
      <Row className="content-wrapper">
        <Placeholder 
          show={isDataEmpty}
          message="Незабаром тут буде сторінка із нашими партнерами."
        />
        <PartnersList 
          loading={loading}
          isLoaded={isLoaded}
          partners={response.data}
        />
      </Row>
    </Container>
  );
};

export default Partners;