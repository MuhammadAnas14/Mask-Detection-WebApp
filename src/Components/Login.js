import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Lock from '@material-ui/icons/Lock';
import Mail from '@material-ui/icons/Mail';
import Logo from '../Assets/default-monochrome.svg'


const theme = createTheme({
  palette:{
    primary:{main: '#F5B62A'},
    secondary:{main:'#383938'},
  }
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    borderradius: '4px',
  },
  inputF:{

  },
  avatar: {
    margin: theme.spacing(2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signup: {
    margin: theme.spacing(-2, 0, 2),
  },
}));

const  SignIn  = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
      <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
      > 
       
      </Grid>
        
        <Typography component="div">
          <Box color="black" marginBottom={1} fontFamily="ui-monospace" fontSize={30} fontWeight={600} m={-2}>
              SIGN IN
          </Box>
        </Typography>
        <Typography component="div">
          <Box color = "black"fontSize={16} m={1} paddingT>
            Sign into your account
          </Box>
        </Typography>
        <form className={classes.form} noValidate>
          <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
          >
            <Grid item xs={9}>
              <TextField
                className={classes.inputF}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Mail color="disabled"/></InputAdornment>,
                }}
              />
            </Grid>

            <Grid item xs={9}>
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: <InputAdornment position="start"><Lock color="disabled" /></InputAdornment>,
              }}
              />
            </Grid>

            <Grid item xs={9}>
              <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              />
            </Grid>
              
            <Grid item xs={9} >
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              m={0}
              >
                Sign In
              </Button>
            </Grid>

            <Grid item>
              <Link href="#" variant="body2" color="secondary" >
                Forgot your password?
              </Link>
            </Grid>

            <Grid item xs={9}>  
              <Typography component="div">
                <Box fontSize={10} m={3} paddingT>
                  <Link href="#" color="secondary" >
                        YOU DO NOT HAVE AN ACCOUNT?
                  </Link>
                </Box>
              </Typography>
            </Grid>

            <Grid item xs={9}>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.signup}
              m={-1}
              >
              SIGN UP
              </Button>
            </Grid>

          </Grid>

          
        </form>
      </div>
    </Container>
    </MuiThemeProvider>
  );
}

export default SignIn