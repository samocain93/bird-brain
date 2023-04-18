import { Container, Box, Avatar, Grid, Typography } from "@mui/material";
import { useTheme, ThemeProvider } from "@mui/material/styles";
// import { useEffect, useState } from 'react';
import { useQuery } from "@apollo/client";
import ProfileNoteCard from "../components/ProfileNoteCard";
import { QUERY_POST } from "../utils/queries";

function Profile() {
  // const [posts, setPosts] = useState(null);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch('/api/profile');
  //     const json = await response.json();

  //     if (response.ok) {
  //       setPosts(json)
  //     }
  //   }

  //   fetchPosts();
  // }, [])
  const prof_theme = useTheme();

  // const { data, loading, error } = useQuery(QUERY_POST);
  // if (loading) return "Loading...";
  // if (error) return <pre>{error.message}</pre>

  // console.log(data);

  return (
    <ThemeProvider
    theme={prof_theme}
    sx={{marginTop: '40px'}}
    style={{marginTop: "40px"}}
    >
      <Container>
        <Grid container

          xs={12}

          sx={{
            backgroundColor: "primary.main",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            boxShadowTop: 0,
            boxShadowBottom: 3,
          }}
        >
          <Grid item
            xs={12} md={3}
          >
            <Avatar
              sx={{
                width: 100,
                height: 100,
                marginTop: 1, marginBottom: 1,
                marginLeft: 10,
                fontSize: 40,
                backgroundColor: "profile_avatar.main",
              }}
            >
            </Avatar>
            {/* CONTENT DISPLAY */}
          </Grid>
          

          <Grid 
            item
            xs={12} md={9}
          >
            <Box
              sx={{
                borderRadius: 20,
                padding: 3,
                marginRight: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "space-around",
              }}
              id="bio-content"
            >
              <Typography variant='h4'> Heres the Name/Username Display </Typography> {/* CONTENT DISPLAY */}
              <Typography variant='h6'>Here's the Bio</Typography > {/* CONTENT DISPLAY */}
            </Box>
          </Grid>
        </Grid>

        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
        
          {/* function below should map all of user's posts to grid once backend is connected, 
        for now a sample grid is provided.*/}
          {/* {data.map(post => (
          <Grid item key={post.id} xs={12} md={6} lg={4}>
            <ProfileNoteCard>{ post.content }</ProfileNoteCard>
          </Grid>
        ))} */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <ProfileNoteCard></ProfileNoteCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProfileNoteCard></ProfileNoteCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProfileNoteCard></ProfileNoteCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProfileNoteCard></ProfileNoteCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProfileNoteCard></ProfileNoteCard>
          </Grid> */}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Profile;
