import { Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const prof_theme = createTheme({
  palette: {
    primary: {
      main: "#FDB813",
    },
    secondary: {
      main: "#FF8F00",
    },
  }
})



function Profile() {
  return (
    <ThemeProvider theme={prof_theme}>
      <Container>
        <Box
          sx={{
            width: 600,
            height: 300,
            backgroundColor: 'primary.main',
          }}
        />
        <h1>This is the Profile Page</h1>
      </Container>
    </ThemeProvider>
    
  );
}

export default Profile;
