import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './Routes';
import {verifyAuth} from './firebase/auth.fb';
const App = () => {
    store.dispatch(verifyAuth());
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
}
export default (App);