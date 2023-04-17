import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({

  posts,
  title,
  showTitle = true,
  showName = true,
}) => {
  if (!posts.length) {
    return <h3
    style={{marginTop: '15px'}}>Posts Will Show Here!</h3>;
  }

  return (

    <div>
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="">
            <h4 className="">
              {showName ? (
                <Link
                  className=""
                  to={`/profiles/${post.user}`}
                >
                  {post.user} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this thought on {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    Posted on {post.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="">
              <p>{post.text}</p>
            </div>
            <Link
              className=""
              to={`/posts/${post._id}`}
            >
              Comment
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList;
