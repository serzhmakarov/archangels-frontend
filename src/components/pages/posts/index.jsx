import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { getPosts } from '../../../api';

import useFetchData from '../../../hooks/useFetchData';
import PostsList from './posts';

const Posts = () => {
  const { loading, isLoaded, data } = useFetchData(getPosts);

  return (
    <Container fluuid className="news-page">
      <Row className="about-page__title-block">
        <h1>НОВИНИ</h1>
      </Row>
    
      <Row className="content-wrapper">
        <PostsList 
          loading={loading}
          isLoaded={isLoaded}
          posts={data}
        />
      </Row>
    </Container>
  );
};

export default Posts;