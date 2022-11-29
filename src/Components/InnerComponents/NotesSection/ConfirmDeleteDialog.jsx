import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useDispatch } from 'react-redux';
import { deleteNote } from '../../../redux/notes';


export default function ConfirmDeleteDialog(props) {
  const dispatch = useDispatch();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  


  return (
    <div>

      <Dialog
        fullScreen={fullScreen}
        open={props.open}
        onClose={props.closeWindow}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Delete Note
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the note "<span style={{fontWeight:500}}>{props.title}</span>"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{color:"rgba(0,0,0,0.5)"}} autoFocus onClick={()=>{props.closeMainMenu(); props.closeWindow()}}>
            Cancel
          </Button>
          <Button  onClick={()=>{props.closeMainMenu(); dispatch(deleteNote(props.id))}} sx={{ color:"#D22B2B", '&:hover':{ backgroundColor:"#d22b2b0f"}}} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// PD = Prop Drilled