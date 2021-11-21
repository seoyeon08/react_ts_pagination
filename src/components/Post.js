import React from 'react';

const Post = ({posts, loading}) => {
  if(loading) {
    return <h2>...loading</h2>;
  }
  return (
    <ul>
      {posts.map(posts => <li key={posts.id}>{posts.title}</li>)}
    </ul>
  );
};


export default Post;