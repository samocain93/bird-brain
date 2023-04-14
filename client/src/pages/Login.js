// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN } from '../utils/mutations';
// import Auth from '../utils/auth';

// const Login = (props) => {

//     const [formState, setFormState] = useState({ email: '', password: '' });
//     const [login, { error, data }] = useMutation(LOGIN);

//     const handleChange = (event) => {
//         const {name, value } = event.target;

//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//     };

//     const formSubmit = async (event) => {
//         event.preventDefault();
//         console.log(formstate);

//         try {
//             const { data } = await login({
//                 variables: { ...formState },
//             });
//             Auth.login(data.login.token);
//         } catch (e) {
//             console.error(e);
//         }

//         setFormState({
//             email: '',
//             password: '',
//         });
//     };

//     return (
//       <main>
//         <div>
          
//         </div>
//       </main>
//     );
// };

// export default Login;

import * as React from 'react';
import { useState } from 'react';
import { useMutation } from '@apollo/client'
import { LOGIN } from '../utils/mutations'
import Auth from '../utils/auth';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

    const [formState, setFormState] = useState({ 
      name: '', 
      password: ''
    });

    const [login, { error, data }] = useMutation(LOGIN);

    const handleChange = (event) => {
        const {name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const formSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await login({
                variables: { input: { ...formState } },
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            name: '',
            password: '',
        });
    };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>

          {data ? (
          <Typography>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </Typography>
        ) : (

          <Box component="form" onSubmit={formSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
            >
              Sign In
            </Button>
            <Grid container>
            </Grid>
          </Box>
        )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}