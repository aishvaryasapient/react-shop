import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../firebase/auth.fb';
import {setLogin} from './../../redux/actions/auth.action';
import Toast from '../Toast/Toast';
const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        form:{
            display: 'flex',
            flexDirection: 'column'
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);

const SignUp =(props)=>{
    const [user,setUser] = useState({})
    const [open,setOpen] = useState(false)
    const dispatch = useDispatch();
    // console.log(dispatch);
    const classes = useStyles()
    const onChangeHandler=(event)=>{
        // console.log(event);
        let newUser = {...user,[event.target.id]: event.target.value};
            setUser(newUser);
        
    }
    const onSubmit=(event)=>{
        // console.log(event)
        event.preventDefault();
        signUp(user).then(res=>{
            console.log(res)
            setOpen(true)
            dispatch(setLogin(res));
        },
        err=>{
            console.log(err)
        })
    }
    return (
        <Grid container className={classes.root} direction="column"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={6}>
                        <form className={classes.form} noValidate autoComplete="off" onSubmit={(event)=>onSubmit(event)}>
                        <TextField id="email" label="Email" onChange={(event)=> onChangeHandler(event)}/>
                        <TextField id="userName" label="User Name" onChange={(event)=> onChangeHandler(event)}/>
                        <TextField id="password" label="Password" type="password" onChange={(event)=> onChangeHandler(event)} />
                                <Button color="primary" type="submit" variant="contained">Register</Button>

                        </form>
                        <Toast severity="success" message="Use Account Created successfully" open={open}/>
                    </Grid>
                    <Link to="/login">Login Here</Link>
                </Grid>
    )
}

export default SignUp;