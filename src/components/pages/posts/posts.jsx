import React from 'react';

import PostCard from './postCard';
import withLoading from '../../../hooks/useLoading';

function PostsList({ posts }) {
  return (
    <div className="news-list">
      {posts.map(({ id, name, date, description, photo }) => (
        <PostCard 
          id={id}
          name={name} 
          date={date} 
          description={description} 
          photo={photo} 
        />
      ))}
    </div>
  );
}

const PostsListWithLoading = withLoading(PostsList);

export default PostsListWithLoading;