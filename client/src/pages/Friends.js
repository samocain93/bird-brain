import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme, ThemeProvider } from "@mui/material/styles";

import FriendNoteCard from "../components/FriendNoteCard"

function Friends() {
  const friends_theme = useTheme();
  return (
    <ThemeProvider theme={friends_theme}>
      <Container>
        <Grid container
          sx={{
            backgroundColor: 'primary.main',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Grid 
            item
            xs={12}
          >
            <Box
              sx={{
                borderRadius: 20,
                padding: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
              id="bio-content"
            >
              <Typography variant='h4'> Your Friends </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {/* TODO: add javascript functionality to populate friends list */}
          <Grid item xs={12} md={6} lg={4}>
            <FriendNoteCard></FriendNoteCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FriendNoteCard></FriendNoteCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FriendNoteCard></FriendNoteCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FriendNoteCard></FriendNoteCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FriendNoteCard></FriendNoteCard>
          </Grid>


        </Grid>

      </Container>
    </ThemeProvider>
  );
}

export default Friends;
