import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentScreen, SCREENS } from "../../../redux/userEntry";

import signedUpImage from "../../../assets/illustrations/signed-up.png";


let buttonStyling= {
    borderRadius:"26px",
    padding:"0.7rem 4rem",
    margin:"1rem 0 0 0 ",
    boxShadow:0,
    color:"rgba(242, 242, 242, 0.95)",
    backgroundColor:"#efc16a",
    fontSize:"0.9rem"
}

export default function SignedupDialog() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{ padding: "0.5rem" }}>
          <a
            href="https://ibb.co/jypmbKL"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              style={{ width: "50%" }}
              src={signedUpImage}
              alt="undraw-Happy-announcement-re-tsm0"
              border="0"
            />
          </a>
          <DialogTitle id="alert-dialog-title" sx={{ fontSize: "2rem", color:"#efc16a" }}>
            Welcome to ToNoter
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your ToNoter account has been created! Please login to continue.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button 
                variant="contained"
                size="large"
                sx={buttonStyling}
                onClick={()=>{dispatch(setCurrentScreen(SCREENS.LOGIN))}}
                >
                Log In
              </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
