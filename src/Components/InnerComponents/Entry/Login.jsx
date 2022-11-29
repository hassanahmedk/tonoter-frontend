import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import FormHelperText from "@mui/material/FormHelperText";
// import FilledInput from "@mui/material/FilledInput";
import Input from "@mui/material/Input";
// import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import LoadingButton from '@mui/lab/LoadingButton';

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { handleLoginRedux, setLoggedInUser, ENTRYSTATUSES } from "../../../redux/userEntry";
import { setCurrentUserId } from "../../../redux/notes";
import { setCurrentScreen, SCREENS } from "../../../redux/userEntry"


let buttonStyling= {
  borderRadius:"26px",
  padding:"0.7rem 4rem",
  margin:"1rem 0 0 0 ",
  boxShadow:0,
  fontSize:"0.9rem",

}


export default function Login() {

  const dispatch = useDispatch();
  const {entryStatus, loginErrorMessage} = useSelector(state => state.userEntry)

  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false
  });
  

  function handleLoginTextChange (event){
    let {name, value} = event.target;

    // setValues((prevValues)=>{
    //   return {...prevValues, [name]:value}
    // })

    setValues({...values, [name]:value})
  }


  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function handleLogin () {

    
    dispatch(handleLoginRedux(values));

  }
  


  return (
    <div id="login">

      <Box sx={{ display: "flex", marginBottom:"1.2rem" }}>
        <AccountCircle
          sx={{
            color: "action.active",
            width: 30,
            height: 30,
            mr: 1,
            my: 0.5,
            mt: 1.8
          }}
        />
        <FormControl variant="standard" sx={{ width: "18rem" }}>
          <InputLabel htmlFor="component-helper">Username</InputLabel>
          <Input
            name="username"
            value={values.username}
            id="component-helper"
            onChange={handleLoginTextChange}
            // value={name}
            // onChange={handleChange}
            aria-describedby="component-helper-text"
          />

        </FormControl>
      </Box>

      <Box sx={{ display: "flex" }}>
        <KeyIcon
          sx={{
            color: "action.active",
            width: 30,
            height: 30,
            mr: 1,
            my: 0.5,
            mt: 1.8
          }}
        />
        <FormControl variant="standard" sx={{ width: "18rem" }} >
          <InputLabel htmlFor="component-helper">Password</InputLabel>
          <Input
            name="password"
            value={values.password}
            id="component-helper"
            onChange={handleLoginTextChange}
            type={values.showPassword ? "text" : "password"}
            // value={name}
            // onChange={handleChange}
            aria-describedby="component-helper-text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText id="component-helper-text" sx={{color:"#ff3333", marginTop:"0.5rem", fontSize:"0.85rem"}}> 
            {loginErrorMessage}
          </FormHelperText>
        </FormControl>
      </Box>

      {/* <Button variant="contained" 
          sx={{
            backgroundColor:"#2EE09A", 
            "&:hover":{
              backgroundColor:"#dbb05f",
            }
            }}
            >      */}

      {
        entryStatus === ENTRYSTATUSES.LOADING ? (<LoadingButton 
                                              loading
                                              variant="contained" 
                                              size="large"
                                              sx={buttonStyling}
                                              color="primary"
                                              onClick={handleLogin}   
                                                >     
                                                Log In
                                            </LoadingButton>) 
                                          : (<LoadingButton 
                                            variant="contained" 
                                            size="large"
                                            sx={buttonStyling}
                                            color="primary"
                                            onClick={handleLogin}   
                                              >     
                                              Log In
                                          </LoadingButton>

                                          )

      }
      
      
      <Button 
          sx={{...buttonStyling, backgroundColor:"rgba(250,250,250,0.8)" }}   
      >     
            Forgot password?</Button>

            <div className="signup-button-mobile">
              <Button 
                sx={buttonStyling}
                variant="outlined"
                color="primary"
                onClick={()=>{dispatch(setCurrentScreen(SCREENS.SIGNUP))}}
              >Sign Up</Button>
            </div>
    </div>
  );
}

// pallete   backgroundColor:"#efc16a",
