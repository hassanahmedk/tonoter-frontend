import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ 
        display: 'flex',
        flexDirection: "column",
        height: "100%",
        width:"100%",
        justifyContent: 'center',
        alignItems: "center"
    }}>
      <CircularProgress size="8rem" sx={{color:"#5FD068", marginBottom:"2rem"}} />
      <Typography sx={{color:"#5FD068", marginBottom:"7rem"}}>Loading Notes</Typography>
    </Box>
  );
}


