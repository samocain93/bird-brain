import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Paper } from '@mui/material';
import FriendNoteCard from '../components/FriendNoteCard';
import PostList from '../components/PostList';
// import PostList2 from '../components/PostList';
import PostForm from '../components/PostForm';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import Auth from '../utils/auth';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard() {

  const [expanded, setExpanded] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log('posts', posts);

  React.useEffect(() => {
    // debugger
    const get = Auth.getToken();
    if (get) {
      Auth.isTokenExpired(get) && Auth.loggedIn();
      {
        setLoggedIn(true);
      }
    }
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Grid container spacing={2}>
      <div>
        <PostForm />
      </div>
      {/* <div>
        <PostList2/>
      </div> */}

      {loggedIn && (
        <Grid item xs={6}>
          <div>
          <PostList 
              sx={{
                marginTop: '40px'
              }}
              posts={posts}
              title="Your Posts"
            />
            {/* <PostList2 /> */}
          </div>
          {loading === false
            ? posts.map((post) => {
                return (
                  <div>
                    <div>
                      {/* <PostList
                      posts={posts}
                      title="Your Posts:"
                      /> */}
                    </div>
                   
                  </div>
       
                );
              })
            : 'Loading...'}
        </Grid>
      )}{' '}
      {!loggedIn && (
        <Grid Item>
          <Paper>{FriendNoteCard}</Paper>
        </Grid>
      )}
    </Grid>

    // {loading === false
    //   ? posts.map((post) => {
    //       return (
    //         <div>
    //           <h3>{post.user.name}</h3>
    //           <p>{post.text}</p>
    //           <p>Likes: {post.likes}</p>
    //           <p>Comments: {post.comments.length}</p>
    //         </div>
    //       );
    //     })
    //   : 'Loading...'}
    // </Container>
  );
}

// console.log(FriendNoteCard);
