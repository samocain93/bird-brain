import { Container, Box, Avatar } from "@mui/material";
import { useTheme, ThemeProvider } from "@mui/material/styles";



function Profile() {
  const prof_theme = useTheme();
  return (
    <ThemeProvider theme={prof_theme}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: 1000,
            height: 200,
            backgroundColor: 'primary.main',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20
          }}
        >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            marginLeft: 0,
            fontSize: 40,
            backgroundColor: 'profile_avatar.main'
            }}
            >MB</Avatar>
        <Box
          sx={{
            border: 2,
            borderRadius: 20,
            padding: 3,
            width: 600,
            height: 175,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-around',
          }}
          id="bio-content"
        >
          <h3> Heres the Name/Username Display </h3>
          <p>Here's the Bio Display</p>
        </Box>
        </Box>
        {/*will add grid here to display user's posts. */}
      </Container>
    </ThemeProvider>
    
  );
}

export default Profile;
