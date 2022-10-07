import React from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

import { getPosts } from '../../../api';
import useFetchData from '../../../hooks/useFetchData';
import Content from './content';

const Post = () => {
  const { id } = useParams();

  const { loading, isLoaded, data } = useFetchData(getPosts, id);

  return (
    <Container fluuid className="post-item-page">
      <Content 
        loading={loading} 
        isLoaded={isLoaded} 
        data={data} 
      />
    </Container>
  );
};

export default Post;