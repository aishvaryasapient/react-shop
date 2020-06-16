import {auth,fb, db} from './firebase';
// import {useDispatch } from 'react-redux';
import {requestLogin,receiveLogin,loginError,requestLogout,receiveLogout,logoutError,verifyRequest,verifySuccess} from './../redux/actions/auth.action';

export const login = (user)=>{
   return auth.signInWithEmailAndPassword(user.email,user.password)
}
export const loginUser = (email, password) => dispatch=> {
    dispatch(requestLogin());
    auth.signInWithEmailAndPassword(email, password)
      .then(user => {
          console.log(user)
        dispatch(receiveLogin(user));
      })
      .catch(error => {
          console.log(error)
        //Do something with the error if you want!
        dispatch(loginError());
      });
  };

  export const logoutUser = ()=>dispatch=> {
    dispatch(requestLogout());
    auth.signOut()
      .then(() => {
        dispatch(receiveLogout());
      })
      .catch(error => {
        //Do something with the error if you want!
        dispatch(logoutError());
      });
  };
  
  export const verifyAuth = ()=> dispatch=> {
    dispatch(verifyRequest());
    auth.onAuthStateChanged(user => {
        if (user !== null) {
          dispatch(receiveLogin(user));
        }
        dispatch(verifySuccess());
      });
  };
export const signUp = (user)=>{
    // console.log(user);
    // console.log(db)
    // console.log(fb)
    // auth.createUserWithEmailAndPassword()
   return auth.createUserWithEmailAndPassword(user.email,user.password)
   .then(()=>updateUser(user))
    // .then(res=>res)
    // .catch(err=> console.log(err))
}

export const updateUser =(info)=>{
    const user = auth.currentUser;
    console.log(user);
    let updateDetail = {displayName: info.userName};
    return  user.updateProfile(updateDetail).then(res=>res).catch(err=>err)
}