import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import SignupSection from './InnerComponents/Entry/SignupSection';
import LoginSection from './InnerComponents/Entry/LoginSection';

import Button from "@mui/material/Button";
import "../assets/css/entry.css"
import entryImg from "../assets/illustrations/entry.svg"



import { setCurrentScreen, SCREENS } from "../redux/userEntry"
import SignedupDialog from './InnerComponents/Entry/SignedupDialog';

let buttonStyling= {
    borderRadius:"26px",
    padding:"0.7rem 4rem",
    margin:"1rem 0 0 0 ",
    boxShadow:0,
    color:"rgba(242, 242, 242, 0.95)",
    backgroundColor:"#efc16a",
    fontSize:"0.9rem"
}

function Entry() {

  const { currentScreen } = useSelector(state => state.userEntry);
  const dispatch = useDispatch();

  if (currentScreen === SCREENS.LOGIN){
    return (
      <div id="entry">
  
          <div className="entry-left">
  
            <LoginSection />
  
           
  
          </div>
  
  
          <div className="entry-right">
            <div className="entry-right-content">
  
             
  
              <div className="entry-right-text">
                <h2>New here?</h2>
                <p>Create a <span> ToNoter </span> account</p>
              </div>
  
              <Button 
                variant="contained"
                size="large"
                color="primary"
                sx={buttonStyling}
                onClick={()=>{dispatch(setCurrentScreen(SCREENS.SIGNUP))}}
                >
                Sign Up
              </Button>
              
            </div>
          </div>
      </div>
    )
  } else if (currentScreen ===  SCREENS.SIGNUP || currentScreen ===  SCREENS.SIGNEDUP){
    return (
      <div id="entry">


        {currentScreen ===  SCREENS.SIGNEDUP && <div className='signedup-dialog'>
          <SignedupDialog/>
        </div>
        }
          <div className="entry-left">
  
            <SignupSection />
  
           
  
          </div>
  
  
          <div className="entry-right">
            <div className="entry-right-content">

            <div className="entry-right-text">
              <h2>Have an account?</h2>
              <p>Login to your <span> ToNoter </span> account</p>
            </div>
  
              <Button 
                variant="contained"
                color="primary"
                size="large"
                sx={buttonStyling}
                onClick={()=>{dispatch(setCurrentScreen(SCREENS.LOGIN))}}
                >
                Log In
              </Button>
              
            </div>
          </div>
      </div>
    )
  }

 
}

export default Entry;