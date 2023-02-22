import React from 'react';
import { useParams } from 'react-router-dom';

import { getPosts } from '../../../api';
import useFetchData from '../../../hooks/useFetchData';
import Content from './content';

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