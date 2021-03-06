import * as React from 'react';
import { CardMedia, Container, CssBaseline, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'© 2021 Artis.app - a blockchain community project'}
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

export default function Forgot(){
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("Username or email")
        });
    }
    return(
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Container component="child" maxWidth="md">               
                <CardMedia
                component="img"
                style={{width: "40%", paddingTop: "10px", margin: "auto"}}
                image="https://artis.app/static/images/questionmark.jpg"
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
            Lost your password?
            <br/>
            <br/>
            No worries. Input your email and we'll send you a password reset link.
            <br/>
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
             InputLabelProps={{required: false, sx:{color: "#9E9E9E"}}}  
             />
            </Box>
            <Button
              type="submit"
              className="normal"
              fullWidth
              style={{backgroundColor: "transparent", fontSize: "1.3em", color: "teal", textTransform: "none", fontFamily: "Bellefair, serif"}}
              variant="text"
              sx={{ mt: 3, mb: 2}}
              classes={{  }}
            >
              Email Link
            </Button>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}

