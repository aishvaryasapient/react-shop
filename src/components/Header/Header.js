import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import{connect} from 'react-redux';
import {setLogout }from  './../../redux/actions/auth.action';
// import Dialog from '../Model/dialog';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > * + *': {
      marginLeft: theme.spacing(2),
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = (props)=>{
  const classes = useStyles();
  const preventDefault = (e)=> e.preventDefault();
  // const dialog = ()=>{
  //   return <Dialog id="login-1">
  //     <h1>This is dialog</h1>
  //   </Dialog>
  // }
  const logout=()=>{
    props.setLogout({user:null,token:false});
  }
    return (
          <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography className={classes.root}>
      <Link to="/home">
        Home
      </Link>
      <Link to="/profile">
        Profile
      </Link>
      <Link to="/login">
        Login
      </Link>
      </Typography>
    {
      props.isAuthenticated ?<Button color="inherit" onClick={logout}>Logout</Button> :<Button color="inherit" >Login</Button>
    }
    
    
  </Toolbar>
</AppBar>
        
    )
}
const mapStateToProps = state => {
  return { isAuthenticated: state.auth.isAuthenticated };
};
const mapDispatchToProps = {setLogout}
export default connect(mapStateToProps,mapDispatchToProps)(Header);