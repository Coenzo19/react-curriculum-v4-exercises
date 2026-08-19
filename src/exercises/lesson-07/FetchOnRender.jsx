import './Lesson07Styles.css';
import { getPosts } from './api.js';
import { useState, useEffect } from 'react';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      console.log('useEffect running');
      try {
        const data = await getPosts();

        setPosts(data);

        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        TODO: Replace me with fetched data when the component renders
        {posts.map((post) => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </li>
        ))}
      </div>
    </div>
  );
}
