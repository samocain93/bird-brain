import React, {useState } from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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

const PostList = ({

  posts,
  title,
  showTitle = true,
  showName = true,
}) => {
  if (!posts.length) {
    return <h3
    style={{marginTop: '15px', textAlign: 'center'}}>Posts Will Show Here!</h3>;
  }

  // const [expanded, setExpanded] = useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (

    <div style={{marginBottom: "180px"}}>

      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (

          <div key={post._id} className="">
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
              sx={{
                fontSize: '30px'
              }}
              style={{
                fontSize: "30"
              }}
              avatar={
                <Avatar
                  sx={{ bgcolor: 'secondary.main' }}
                  aria-label='recipe'
                >
                  C
                </Avatar>
                
              }
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.postAuthor}
              // title={posts.user ? posts.user.name : "Anonymous"}
              // subheader={post.createdAt}
                
              />
                <CardMedia
                component='img'
                height='194'
                image='./assets/images/bird-article-l.png'
                alt='Yellow Bird'
                />
                  <CardContent>
                    <Typography variant='body2' color='text.secondary'>
                    <div className="">
                      <p className="postText">{post.text}</p>
                    </div>
                    <>
                      <span style={{ fontSize: '1rem' }}>
                        Posted on {post.createdAt}
                      </span>
                    </>

                    </Typography>
                    <Link
                        className=""
                        to={`/posts/${post._id}`}
                        >
                          Comment
                      </Link>
                  </CardContent>
                  <CardActions disableSpacing>
                      <IconButton aria-label='add to favorites'>
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label='share'>
                        <ShareIcon />
                      </IconButton>
                      <ExpandMore
                        // expand={expanded}
                        // onClick={handleExpandClick}
                        // aria-expanded={expanded}
                        aria-label='show more'
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
              {/* <h4 className="">
              {showName ? (
                <Link
                  className=""
                  to={`/profiles/${post.user}`}
                >
                  {post.user} <br />
                  <span style={{ fontSize: '1rem' }}>
                    Posted on {post.createdAt}
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
            </Link> */}
            </Card>

          </div>
        ))}
    </div>
  );
};

export default PostList;
