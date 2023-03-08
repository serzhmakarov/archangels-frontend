import React, { useEffect, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';

import PostsList from './posts';
import useApi from './useApi';
import Placeholder from '../../globals/placeholder';

const Posts = () => {
  const { 
    fetchItems,
    loading, 
    isLoaded, 
    posts: {
      data,
      meta
    },
  } = useApi();

  const handleScroll = useCallback((event) => {
    const elementRef = event.target.documentElement;

    const disabled = loading || meta.total_count === data.length;

    const shouldLoadData = elementRef.scrollTop + elementRef.clientHeight > elementRef.scrollHeight - 300

    if (shouldLoadData && !disabled) {
      fetchItems();
    }
  }, [loading, fetchItems]);

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

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
      {loading && (<Spinner animation="border" />)}
    </Container>
  );
};

export default Posts;