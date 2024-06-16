'use client';

import React, { useEffect, useState } from 'react';
import FeedCard from './FeedCard';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetching the posts from a JSON file or endpoint
    // Replace this URL with the actual endpoint or path to your JSON file
    const fetchPosts = async () => {
      const response = await fetch('./posts.json');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="space-y-8">
      {posts.map(post => (
        <FeedCard
          key={post.id}
          profileImage={post.profileImage}
          title={post.title}
          subtitle={post.subtitle}
          content={post.content}
          images={post.images}
        />
      ))}
    </div>
  );
};

export default Feed;
