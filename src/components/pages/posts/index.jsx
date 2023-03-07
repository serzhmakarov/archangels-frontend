import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import PostsList from './posts';
import { getPosts } from '../../../api';
import useFetchData from '../../../hooks/useFetchData';
import Placeholder from '../../globals/placeholder';

const Posts = () => {
  const { loading, isLoaded, data } = useFetchData(getPosts);

  const isDataEmpty = isLoaded && !data.length

  return (
    <Container className="news-page">
      <Row className="about-page__title-block">
        <h1>Новини</h1>
      </Row>
    
      <Row className="content-wrapper">
        <Placeholder 
          show={isDataEmpty}
          message="Незабаром тут з'являться всі новини нашого фонду від початку повномасштабного вторгнення."
        />
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