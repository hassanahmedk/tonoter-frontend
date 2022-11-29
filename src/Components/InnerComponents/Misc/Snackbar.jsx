import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';


export default function SimpleSnackbar(props) {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    props.onClose();
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={props.onClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


    return (
      <div>
        <Snackbar
          open={props.open}
          autoHideDuration={6000}
          onClose={props.onClose}
          message="Note added"
          action={action}
        >
          <Alert 
            onClose={handleClose} 
            severity="success" 
            sx={props.action === "Deleted" ? { backgroundColor:"#d32f2f", width: '100%' } : { width: '100%' } }
            >
            Note {props.action}
          </Alert>
        </Snackbar>
      </div>
    );
  
}
