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
// import { red } from "@mui/material/colors";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Paper } from '@mui/material';
import FriendNoteCard from '../components/FriendNoteCard';
// import InputUnstyled from '@mui/base/InputUnstyled';
// import Input from '@mui/joy/Input';
// import Textarea from '@mui/joy/Textarea';
// import TextField from '@mui/material/TextField';
import PostList from '../components/PostList';
// import PostList2 from '../components/PostList';
import PostForm from '../components/PostForm';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import Auth from '../utils/auth';
// import { QUERY_POSTS } from '../utils/queries';
// import { useQuery } from '@apollo/client';

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
          {/* <PostList
              posts={posts}
              title="Some Posts"
            /> */}
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
                    <Card
                    sx={{
                      width: '345',
                      height: '200',
                      backgroundColor: '#DAE3F7',
                      bottom: '0',
                      position: 'dynamic',
                      paddingTop: '1rem',
                      marginTop: '3rem',
                      paddingBottom: '1rem',
                      border: '3',
                      borderRadius: '16px',
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          sx={{ bgcolor: 'secondary.main' }}
                          aria-label='recipe'
                        >
                          R
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label='settings'>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={post.user ? post.user.name : "Anonymous"}
                      subheader={post.createdAt}
                    />
                    <CardMedia
                      component='img'
                      height='194'
                      image='./assets/images/bird-article-l.png'
                      alt='Yellow Bird'
                    />
                    <CardContent>
                      <Typography variant='body2' color='text.secondary'>
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label='add to favorites'>
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label='share'>
                        <ShareIcon />
                      </IconButton>
                      <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label='show more'
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                      <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                        {post.text}
                        </Typography>
                        {/* <Typography paragraph>
                          Heat oil in a (14- to 16-inch) paella pan or a large,
                          deep skillet over medium-high heat. Add chicken,
                          shrimp and chorizo, and cook, stirring occasionally
                          until lightly browned, 6 to 8 minutes. Transfer shrimp
                          to a large plate and set aside, leaving chicken and
                          chorizo in the pan. Add pimentón, bay leaves, garlic,
                          tomatoes, onion, salt and pepper, and cook, stirring
                          often until thickened and fragrant, about 10 minutes.
                          Add saffron broth and remaining 4 1/2 cups chicken
                          broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                          Add rice and stir very gently to distribute. Top with
                          artichokes and peppers, and cook without stirring,
                          until most of the liquid is absorbed, 15 to 18
                          minutes. Reduce heat to medium-low, add reserved
                          shrimp and mussels, tucking them down into the rice,
                          and cook again without stirring, until mussels have
                          opened and rice is just tender, 5 to 7 minutes more.
                          (Discard any mussels that don&apos;t open.)
                        </Typography>
                        <Typography>
                          Set aside off of the heat to let rest for 10 minutes,
                          and then serve.
                        </Typography> */}
                      </CardContent>
                    </Collapse>
                  </Card>
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
