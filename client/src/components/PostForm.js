
import React, { useState } from 'react';
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const PostForm = () => {

  const [postText, setPostText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  // const [loggedIn, setLoggedIn] = useState(false);
  const [addPost, { error }] = useMutation(ADD_POST, {

    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      // const { me } = cache.readQuery({ query: QUERY_ME });
      // cache.writeQuery({
      //   query: QUERY_ME,
      //   data: { me: { ...me, posts: [...me.posts, addPost] } },
      // });
    },
  });

  // useEffect (()=>{
  //   debugger
  //   const get = Auth.getToken();
  //   if(get) {
  //      (Auth.isTokenExpired(get) && Auth.loggedIn()); {
  //       setLoggedIn(true);
  //     };
  //   };
  // });
  // console.log(Auth.getProfile())
  const submitPost = async (event) => {

    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          text: postText,
          // postAuthor: Auth.getProfile().data.name,
        },
      });

      console.log('data', data);
      setPostText("");

    } catch (err) {
      console.error(err);
    }
    console.log('postText', postText);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'postText' && value.length <= 100) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    // <div>
    //     <div className='postBox'>
    //       <h2 className='postTitle'>What are you thinking today?</h2>

    //       {loggedIn && (
    //         <>
    //         <p
    //           className={`m-0 ${
    //             characterCount === 280 || error ? 'text-danger' : ''
    //           }`}
    //         >
    //           Character Count: {characterCount}/100
    //         </p>
    //         <form
    //           className=""
    //           onSubmit={submitPost}
    //         >
    //           <div className="">
    //             <textarea
    //               name="postText"
    //               placeholder="Soo what happened was..."
    //               id="text"
    //               value={postText}
    //               className="postInput"
    //               style={{ lineHeight: '1.5', lineWidth:'100', resize: 'both' }}
    //               onChange={handleChange}
    //             ></textarea>
    //           </div>

    //           <div className="">
    //             <button className="postButton" type="submit">
    //               Post!
    //             </button>
    //           </div>
    //           {error && (
    //             <div className="">
    //               {error.message}
    //             </div>
    //           )}
    //         </form>
    //       </>
    //       )}{" "}
    //       {!loggedIn && (
    //         <p>
    //           You need to be logged in to post on your feed. Please{' '}
    //           <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
    //         </p>
    //       )}
    //       {/* {Auth.loggedIn() ? ( */}
    //   </div>
    // </div>
    // <div>
    <div className='postBox'>
      <h2 className='postTitle'>What are you thinking today?</h2>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${characterCount === 280 || error ? 'text-danger' : ''
              }`}
          >
            Character Count: {characterCount}/100
          </p>
          <form
            className=""
            onSubmit={submitPost}
          >
            <div className="">
              <textarea
                name="postText"
                placeholder="Soo what happened was..."
                id="text"
                value={postText}
                className="postInput"
                style={{ lineHeight: '1.5', lineWidth: '100', resize: 'both' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="">
              <button className="postButton" type="submit">
                Post!
              </button>
            </div>
            {error && (
              <div className="">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to post on your feed. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
      {/* {Auth.loggedIn() ? ( */}
    </div>
  );
};

export default PostForm;