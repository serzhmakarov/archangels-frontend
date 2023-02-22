import React from 'react';

import PostCard from './postCard';
import withLoading from '../../../hooks/useLoading';

function PostsList({ posts }) {
  return (
    <div className="news-list">
      {posts.map(({ id, name, date, short_description, photo_url }) => (
        <PostCard 
          id={id}
          name={name} 
          date={date} 
          short_description={short_description} 
          photo={photo_url} 
        />
      ))}
    </div>
  );
}

const PostsListWithLoading = withLoading(PostsList);

export default PostsListWithLoading;