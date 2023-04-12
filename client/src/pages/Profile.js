import { Container, Box, Avatar, Grid, Typography } from "@mui/material";
import { useTheme, ThemeProvider } from "@mui/material/styles";

import ProfileNoteCard from "../components/ProfileNoteCard";

function Profile() {
  const prof_theme = useTheme();
  return (
    <ThemeProvider theme={prof_theme}>
      <Container>
        <Grid container

          xs={12}

          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
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
          
          <Grid item xs={12}>
              
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
          {/* {posts.map(post => (
          <Grid item key={post.id}>
            <NoteCard>{ post.content }</NoteCard>
          </Grid>
        ))} */}
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
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProfileNoteCard></ProfileNoteCard>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Profile;
