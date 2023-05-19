import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setCurrentScreen, SCREENS, usernameCheckerRedux } from "../../../redux/userEntry";

import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import FormHelperText from "@mui/material/FormHelperText";

import FilledInput from "@mui/material/FilledInput";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import InputAdornment from "@mui/material/InputAdornment";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";




let buttonStyling= {
  borderRadius:"26px",
  padding:"0.7rem 4rem",
  margin:"1rem 0 0 0 ",
  boxShadow:0,
  fontSize:"0.9rem",
  // backgroundColor:"#efc16a",
}

export default function Signup() {
  const dispatch = useDispatch();
  const { userExists } = useSelector(state => state.userEntry);

  const [values, setValues] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    showPassword: false
  });

  const [passwordLengthText, setPasswordLengthText] = useState("");
  const [passwordMatchText, setPasswordMatchText] = useState("");
  const [validEmailText, setValidEmailText] = useState("");

  const [allFieldsFilled, setAllFieldsFilled] = useState(true);
  
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setValues({...values, [name]:value});

    // if(name==="password"){
    //   if (value.length < 6){
    //     setPasswordLengthText("Your password should be longer than 6 characters");
    //   } else {
    //     setPasswordLengthText("");
    //   }
    // }
  }

  const usernameChecker = (event) => {
    dispatch(usernameCheckerRedux(event.target.value));
  }

  const passwordLengthChecker = (event) => {
    if (event.target.value.length < 6){
      setPasswordLengthText("Password should be longer than 6 characters");
    } else {
      setPasswordLengthText("");
    }

    passwordMatchText(event);
  }

  const passwordMatchCheck = (event) => {
    if(event.target.name === "confirmPassword"){
      if(event.target.value !== values.password){
        setPasswordMatchText("Passwords Should Match");
      } else {
        setPasswordMatchText("");
      }
    } else {
        if(event.target.value !== values.confirmPassword){
          setPasswordMatchText("Passwords Should Match");
        } else {
          setPasswordMatchText("");
        }
    }
  }

  const emailCheck = (event) => {
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(event.target.value)){
      setValidEmailText("Please enter a valid email")
    } else {
      setValidEmailText("");
    }
  }

  const handleSignup = () => {
    const valuesArray =  Object.values(values);
    const isEmpty = valuesArray.some(field => field === "");
    
    setAllFieldsFilled(!isEmpty);


 
    if(!isEmpty){
      submitForm();
    }
    
  }
  

  const submitForm = () => {
    if(passwordMatchText === "" && !userExists && passwordLengthText === "" && validEmailText === ""){
      let signupData = {
        ...values,
        dateJoined: new Date(),
        verified: false
      }
  
      dispatch(addUser(signupData));
    }
  }

  return (
    <div id="login">


    {!allFieldsFilled &&

      <FormHelperText
        sx={{color:"#ff3333", margin:"0.5rem 0", alignSelf:"start"}} 
        id="component-helper-text">
          *Please fill in all the fields 
      </FormHelperText>

    }
      <Box sx={{ display: "flex" }}>

        <FormControl variant="standard" className="signup-field signup-field-name" sx={{ marginRight:"2rem" }}>
          <InputLabel htmlFor="component-helper">First Name</InputLabel>
          <Input
            id="component-helper"
            name="firstName"
            value={values.firstName}
            // value={name}
            onChange={handleChange}
            required
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text"> </FormHelperText>
        </FormControl>
        <FormControl variant="standard" className="signup-field signup-field-name" >
          <InputLabel htmlFor="component-helper">Last Name</InputLabel>
          <Input
            id="component-helper"
            name="lastName"
            value={values.lastName}
            // value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text"> </FormHelperText>
        </FormControl>
      </Box>


      <Box sx={{ display: "flex" }}>
        <FormControl variant="standard"  className="signup-field" >
          <InputLabel htmlFor="component-helper">Username</InputLabel>
          <Input
            id="component-helper"
            name="_id"
            value={values._id}
            required
            // value={name}
            onChange={handleChange}
            onBlur={usernameChecker}
            aria-describedby="component-helper-text"
          />
          <FormHelperText 
            sx={{color:"#ff3333", margin:"0.5rem 0"}} 
            id="component-helper-text">
              {userExists ? "Username already exists" : ""}
          </FormHelperText>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex" }}>
        <FormControl variant="standard" className="signup-field">
          <InputLabel htmlFor="component-helper">Email</InputLabel>
          <Input
            id="component-helper"
            name="email"
            value={values.email}
            onBlur={emailCheck}
            required
            // value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text" sx={{color:"#ff3333", margin:"0.5rem 0"}}>
            {validEmailText}
          </FormHelperText>
        </FormControl>
      </Box>

      <Box sx={{ display: "flex" }}>
        <FormControl variant="standard" className="signup-field">
          <InputLabel htmlFor="component-helper">Password</InputLabel>
          <Input
            id="component-helper"
            name="password"
            minlength="6"
            value={values.password}
            type={values.showPassword ? "text" : "password"}
            // value={name}
            onChange={handleChange}
            onBlur={passwordLengthChecker}
            aria-describedby="component-helper-text"
            required
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
            <FormHelperText
              sx={{color:"#ff3333", margin:"0.5rem 0"}} 
              id="component-helper-text"> 
              {passwordLengthText}
            </FormHelperText>
          </FormControl>
        </ Box>
      <Box sx={{ display: "flex" }}>
        <FormControl variant="standard" className="signup-field">
          <InputLabel htmlFor="component-helper">Re-Type Password</InputLabel>
          <Input
            id="component-helper"
            name="confirmPassword"
            value={values.confirmPassword}
            type={values.showPassword ? "text" : "password"}
            // value={name}
            onChange={handleChange}
            onBlur={passwordMatchCheck}
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
          <FormHelperText
            sx={{color:"#ff3333", margin:"0.5rem 0"}} 
            id="component-helper-text"> 
            {passwordMatchText}
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
      <Button 
        variant="contained" 
        size="large"
        sx={buttonStyling}
        onClick={handleSignup}
        color="primary"
      >     
            Sign Up
      </Button>


      <div className="login-button-mobile">
              <Button 
                color="primary"
                sx={buttonStyling}
                variant="outlined"
                size="large"
                onClick={()=>{dispatch(setCurrentScreen(SCREENS.LOGIN))}}
              >Login</Button>
        </div>
      <Button 
          sx={{...buttonStyling, color:"#efc16a", backgroundColor:"rgba(250,250,250,0.8)"}}
            >     
            Need Help Signing Up?
      </Button>

    </div>
  );
}
