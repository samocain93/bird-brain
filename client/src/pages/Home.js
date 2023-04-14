import { Container } from '@mui/material';
import { QUERY_POSTS } from '../utils/queries';
import { useQuery } from '@apollo/client';

function Home() {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);
  return (
    <Container>
      <div>
        <h1>This is the Home Page</h1>
      </div>

      {loading === false
        ? posts.map((post) => {
            return (
              <div>
                <h3>{post.user}</h3>
                <p>{post.text}</p>
                <p>Likes: {post.likes}</p>
                <p>Comments: {post.comments.length}</p>
              </div>
            );
          })
        : 'Loading...'}
    </Container>
  );
}

export default Home;
