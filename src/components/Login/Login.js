import React from 'react';
import { connect ,useDispatch} from 'react-redux';
import { setLogin } from './../../redux/actions/auth.action'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useState,useRef } from 'react';
import {loginUser} from './../../firebase/auth.fb';
import { withStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
const styles = () => ({
    "@global": {
      body: {
        backgroundColor: "#fff"
      }
    },
    paper: {
      marginTop: 100,
      display: "flex",
      padding: 20,
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "#f50057"
    },
    form: {
      marginTop: 1
    },
    errorText: {
      color: "#f50057",
      marginBottom: 5,
      textAlign: "center"
    }
  });
  
export
    const Login = (props) => {
        const [user,setUser]=useState({});
        const {classes,loginError ,dispatch} = props;
        const onChangeHandler =(event)=>{
            let newUser = {...user,[event.target.id]: event.target.value};
            setUser(newUser);
            
        }
        const handleSubmit = (event)=>{
            event.preventDefault();
            dispatch(loginUser(user.email,user.password))
        }
        return (

            <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={onChangeHandler}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={onChangeHandler}
              />
              {loginError && (
                <Typography component="p" className={classes.errorText}>
                  Incorrect email or password.
                </Typography>
              )}
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </Paper>
          </Container>
        )
    }
const mapStateToProps = (state)=>({
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
})
const mapDispathcToProps=(dispatch)=>dispatch;
export default withStyles(styles)(connect(mapStateToProps)(Login));