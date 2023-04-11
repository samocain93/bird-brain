import { Container, Box, Avatar, Grid, Paper } from "@mui/material";
import { useTheme, ThemeProvider } from "@mui/material/styles";

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
          

          <Grid item
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
              <h3> Heres the Name/Username Display </h3> {/* CONTENT DISPLAY */}
              <p>Here's the Bio</p> {/* CONTENT DISPLAY */}
            </Box>
          </Grid>
          
          </Grid>

        <Grid container>
          {/* function below should map all of user's posts to grid once backend is connected, 
        for now a sample grid is provided.*/}
          {/* {posts.map(post => (
          <Grid item key={post.id}>
            <Paper>{ post.content }</Paper>
          </Grid>
        ))} */}
          <Grid item xs={12} md={6}>
            <Paper>Post 1</Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>Post 2</Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>Post 3</Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>Post 4</Paper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Profile;
