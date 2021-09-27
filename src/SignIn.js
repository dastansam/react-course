import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardMedia} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
    },
  },
 
});

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
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <CardMedia
          component="img"
          style={{width: '23%', paddingTop: "20px", margin: "auto"}}
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
          <Typography component="h1" variant="h5" style={{fontSize: "1.5em", fontFamily: "Bellefair, serif"}}>
          WHERE ARTISTS PROTECT
          <br />
          AND SELL THEIR WORK
          <br />
          <br />
          Digital and real-world art is copied endlessly. Billions in earnings lost by artists and
          art owners. Artis.app enables the safe marketing of all art - written, image, physical, 
          audio -- around the world and ensures its valuable authenticity -- <em>for free</em>.
          <br />
          <br />
          Artis.app is a community project created by artists for artists.
          <br/>
          <br/>
          Currently, registration is by invitation.
         <br />
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: "60%"}}>
            <TextField
              variant="standard"
              style={{textTransform: "none"}}
              margin="normal"
              required
              fullWidth
              color=""
              id="email"
              label="Username or Email"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{required: false, sx:{color: "#9E9E9E"}}}
              InputProps={{}}
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
              InputLabelProps={{required: false, sx:{color: "#9E9E9E"}}}  
            />
              <Grid container>
              <Grid item xs
              sx={{ml: 50}}
              >
                <NavLink to="/forgot" variant="body2" style={{textDecoration: "none", fontSize: "1em", color: "#03B6EF", fontFamily: "Arial"}}>
                  lost password
                </NavLink>
              </Grid>
            </Grid>
            <Button
              type="submit"
              className="normal"
              fullWidth
              style={{backgroundColor: "transparent", fontSize: "1.5em", hover: "none", color: "teal", textTransform: "none", fontFamily: "Bellefair, serif"}}
              variant="text"
              sx={{ mt: 3, mb: 2}}
              classes={{ }}
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
              InputLabelProps={{required: false, sx:{color: "#9E9E9E"}}}         
            />
            <Button
              type="submit"
              className="normal"
              fullWidth
              style={{backgroundColor: "transparent", fontSize: "1.5em", color: "brown", textTransform: "none", fontFamily: "Bellefair, serif"}}
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