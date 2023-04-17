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
  console.log(posts);

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

      {loggedIn && (
        <Grid item xs={6}>
          {loading === false
            ? posts.map((post) => {
                return (
                  <div>
                    <div>
                      <PostList
                      posts={posts}
                      title="Some Posts"
                      />
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
  );
}

// console.log(FriendNoteCard);
