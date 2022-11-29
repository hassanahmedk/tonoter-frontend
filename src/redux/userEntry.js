import { createSlice } from "@reduxjs/toolkit";

import { setCurrentUserId } from "./notes";

export const SCREENS = Object.freeze({
    LOGIN: 'login',
    SIGNUP: 'signup',
    SIGNEDUP: 'signedup',
});

export const ENTRYSTATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
  });

export const userEntrySlice = createSlice({
    name: "userEntry",
    initialState: {
        loggedIn: false,
        currentScreen: SCREENS.LOGIN,
        entryStatus: ENTRYSTATUSES.IDLE,
        userExists: false,          // for signup screen if username already exists
        loginErrorMessage: "",          // for signup screen if username already exists
        loggedInUser:{},
    },

    reducers:{
        setLoggedIn(state, action){
            state.loggedIn = action.payload
        },
        setLoggedInUser(state, action){
            state.loggedInUser = action.payload
        },

        setCurrentScreen(state, action){
            state.currentScreen = action.payload
        },

        setUserExists(state, action){
            state.userExists = action.payload
        },
        setEntryStatus(state, action){
            state.entryStatus = action.payload
        },
        setLoginErrorMessage(state, action){
            state.loginErrorMessage = action.payload
        },
    }
})


export const { 
              setEntryStatus,
              setLoggedInUser, 
              setLoginErrorMessage, 
              setLoggedIn, 
              setCurrentScreen, 
              setUserExists } = userEntrySlice.actions;

export default userEntrySlice.reducer;


// THUNKS

export function handleLoginRedux (loginData, localStorageUserData){

    return async function handleLoginThunk(dispatch, getState){
      dispatch(setEntryStatus(ENTRYSTATUSES.LOADING));

      try {
            fetch(`https://${process.env.REACT_APP_API_URL}/login`, {
              method: "POST",
              headers: {
                'Content-type' : "application/json"
              },
              body: JSON.stringify(loginData)
            })
            .then(res => res.json())
            .then(data => {
              if(data.loginAttempt === true){
                dispatch(setCurrentUserId(loginData.username));

                const localStorageUserData = {
                  username: loginData.username,
                }
                localStorage.setItem("user", JSON.stringify(localStorageUserData));
                dispatch(setLoggedInUser(localStorageUserData));
                dispatch(setEntryStatus(ENTRYSTATUSES.IDLE));
                dispatch((setLoggedIn(true)));

              } else {
                dispatch(setLoginErrorMessage(data.response));
                dispatch(setEntryStatus(ENTRYSTATUSES.ERROR));
              }
            })
        
          } catch (err) {
           console.log(err);
         }
    }
}


export function usernameCheckerRedux (userId){
    return async function usernameCheckerThunk(dispatch, getState){
  
        try{
          
            fetch(`https://${process.env.REACT_APP_API_URL}/signupCheck`, {
                method: "POST",
                headers: {
                  'Content-type' : "application/json"
                },
                body: JSON.stringify({userId})
              })
            .then(res => res.json())
            .then(data => {
                dispatch(setUserExists(data.userExists));
            })
        } catch(err){
            console.log(err);
        }
    }
}

export function addUser (signupData){
    return async function addUserThunk(dispatch, getState){
      try {
        fetch(`https://${process.env.REACT_APP_API_URL}/signup`, {
          method: "POST",
          headers: {
            'Content-type' : "application/json"
          },
          body: JSON.stringify(signupData)
        })
        .then(res => res.json())
        .then(() => {
          dispatch(setCurrentScreen(SCREENS.SIGNEDUP));
        })
  
      } catch(err){
        console.log(err);
      }
    }
}
