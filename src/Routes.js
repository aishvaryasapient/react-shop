import React from 'react';

import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

import {connect} from 'react-redux';

const Routes = (props)=>{
    const location = useLocation().state || '';
    return (
        <Router>
                <div>
                    <Header />
                        {
                            props.isAuthenticated ?
                                <Switch>
                                    <Route path="/home" component={Home} />
                                    <Route path="/profile" component={Profile} />
                                    {/* <Route path="/" component={Home} /> */}
                                    <Redirect to={{
                                        pathname:"/home",
                                        state:{
                                            from:location
                                        }
                                    }} component={Home}/>
                                </Switch>
                                :
                                <Switch>
                                    <Route path="/login" component={Login} />
                                    <Route path="/signup" component={SignUp} />
                                    {/* <Route path="/" component={Login} /> */}
                                    <Redirect to={{
                                        pathname:"/login",
                                        state:{
                                            from:location
                                        }
                                    }} />
                                </Switch>
                        }
                </div>
            </Router>
    )
}

const mapStateToProps = state => {
    return { isAuthenticated: state.auth.isAuthenticated };
  };


export default connect(mapStateToProps,null)(Routes);