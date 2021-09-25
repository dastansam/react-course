import * as React from 'react';
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
// import { createMuiTheme, ThemeProvider } from '@mui/material/styles';
import { CardMedia, Switch } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {useTheme, createMuiTheme, ThemeProvider} from "@material-ui/core/styles";


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'© 2021 Artis.app -- founded by Hollywood creatives for fellow creatives worldwide'}
      <Link color="inherit" href="https://material-ui.com/" style={{textDecoration:"none"}}>
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Bellafair",
      "serif",
    ].join(','),
  }
})

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return ( 
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <CardMedia
          component="img"
          style={{width: '25%', paddingTop: "20px", margin: "auto"}}
          image="https://artis.app/static/images/globe.jpeg"
        />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" style={{fontSize: "1.5em"}}>
          WHERE ARTISTS PROTECT
          <br />
          AND SELL THEIR WORK
          <br />
          <br />
          Digital and real-world art is copied endlessly. Billions in earnings lost by artists and 
          art owners. Artis.app enables the safe marketing of all art - written, image, physical, audio -
          - around the world and ensures its valuable authenticity -- <em>for free</em>
          <br />
          <br />
          Artis.app is a community project created by artists for artists.
          <br/>
          <br/>
          Currently, registration is by invitation.
         <br />
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: "80%"}}>
            <TextField
              variant="standard"
              style={{textTransform: "none"}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username or Email"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{required: false,}}  
            />
            <TextField
              variant="standard"
              style={{textTransform: "none"}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{required: false}}  
            />
              <Grid container>
              <Grid item xs
              sx={{ml: 38}}
              >
                <NavLink to="/forgot" variant="body2" style={{textDecoration: "none"}}>
                  lost password
                </NavLink>
              </Grid>
            </Grid>
            <Button
              type="submit"
              className="normal"
              fullWidth
              style={{backgroundColor: "transparent", fontSize: "1.5em", color: "teal", textTransform: "none"}}
              variant="text"
              sx={{ mt: 3, mb: 2}}
              classes={{  }}
            >
              Log In
            </Button>
            <TextField
              style={{textTransform: 'none'}}
              variant="standard"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Artis Code"
              type="text"
              id="name"
              autoComplete="off"
              sx={{mb: 3}}   
              InputLabelProps={{required: false}}         
            />
            <Button
              type="submit"
              className="normal"
              fullWidth
              style={{backgroundColor: "transparent", fontSize: "1.5em", color: "brown", textTransform: "none"}}
              variant="text"
              sx={{ mt: -1, mb: 2}}
              classes={{  }}
            >
              Look Up
            </Button>  
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>   
  );
}