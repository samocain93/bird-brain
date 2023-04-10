import { Container, Box, Avatar } from "@mui/material";
import { useTheme, ThemeProvider } from "@mui/material/styles";



function Profile() {
  const prof_theme = useTheme();
  return (
    <ThemeProvider theme={prof_theme}>
      <Container>
        <Box
          sx={{
            width: 1000,
            height: 300,
            backgroundColor: 'primary.main',
          }}
        >
        <Box
          sx={{
            width: 20,
            height: 10,
          }}
        />
        <Avatar
          sx={{
            width: 150,
            height: 150,
            mt: 8,
            marginLeft: 10,
            fontSize: 40,
            backgroundColor: 'profile_avatar.main'
          }}>MB</Avatar>
          
        </Box>
        <h1>This is the Profile Page</h1>
      </Container>
    </ThemeProvider>
    
  );
}

export default Profile;
