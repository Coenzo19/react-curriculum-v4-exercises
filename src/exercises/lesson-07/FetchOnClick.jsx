import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState({});

  async function getPost() {
    try {
      const data = await getSinglePost(1);

      setPost(data);

      console.log(data);
    } finally {
      console.log('complete');
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button
        onClick={() => {
          getPost();
        }}
        type="button"
      >
        Get post
      </button>
      <div className="content">
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      </div>
    </div>
  );
}
