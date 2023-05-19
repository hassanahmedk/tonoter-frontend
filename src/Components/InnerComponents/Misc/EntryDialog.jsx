import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider } from '@mui/material';

export default function EntryDialog(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{position:"absolu"}}
      >
        <DialogTitle sx={{color:"#efc16a"}} id="alert-dialog-title">
          {"Welcome to To-Noter!"}
        </DialogTitle>
        <DialogContent sx={{display:"flex", flexDirection:"column", gap:"2rem"}}>
          <DialogContentText id="alert-dialog-description">
          If you are looking to test the application without creating an account, you may utilize the provided credentials to log in:
          </DialogContentText>
          <Divider />
          <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{display:"grid", gridTemplateRows:"1fr 1fr"}}>

            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem"}}>
            Username: <span style={ {fontWeight:"600", color:"#efc16a"}}> test</span>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem"}}>
            Password: <span style={ {fontWeight:"600", color:"#efc16a"}}>test123</span>
          </div>
            </div>
      </div>
          <Divider />
      <div style={{justifySelf:"flex-end", marginLeft:"auto", fontStyle:"italic"}} id="alert-dialog-description">
            Cheers <span role="img" aria-labelledby="emoji">🎉</span> 
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
