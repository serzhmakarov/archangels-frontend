import React from 'react';
import { useParams } from 'react-router-dom';

import { getPosts } from '../../../api';
import useFetchData from '../../../hooks/useFetchData';
import Content from './content';

// TODO: Show 404 page if post doesnt exist

const Post = () => {
  const { id } = useParams();

  const { loading, isLoaded, data } = useFetchData(getPosts, id);

  return (
    <div fluuid className="post-item-page">
      <Content 
        loading={loading} 
        isLoaded={isLoaded} 
        data={data} 
      />
    </div>
  );
};

export default Post;