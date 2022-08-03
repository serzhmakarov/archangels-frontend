import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import NewsCard from './newsCard';
import { newsList } from '../../../constants';

const News = () => {
  return (
    <Container fluuid className="reports-page">
      <Row className="about-page__title-block">
        <h1>НОВИНИ</h1>
      </Row>
    
      <Row className="content-wrapper">
        <div className="news-list">
          {newsList.map(({ name, date, description, link }) => (
            <NewsCard name={name} date={date} description={description} link={link} />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default News;