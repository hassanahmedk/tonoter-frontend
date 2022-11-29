import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';

import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from "../../../redux/theme"

import darkModeIcon from "../../../assets/illustrations/dark-mode-icon.png";
import lightModeIcon from "../../../assets/illustrations/light-mode-icon.png";


export default function ChangeTheme(props) {
  let dispatch = useDispatch();
  const {selectedTheme} = useSelector(state=>state.theme);

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const themeSelect = (theme) => {
    dispatch(setTheme(theme));
    props.onClose();
  };

  let lightModeSelect = {};
  let darkModeSelect = {};

  if(selectedTheme==="defaultLight"){
    lightModeSelect = {selected:"true"};
  } else if(selectedTheme==="defaultDark"){
    darkModeSelect = {selected:"true"};
  }

  return (
    <Dialog onClose={handleClose} open={open} >
      <div>
      <DialogTitle>Set Theme</DialogTitle>
      <List sx={{width:"15rem", pt:0}}>
  
          <ListItem 
            {...lightModeSelect}
            button 
            onClick={() => themeSelect("Light")}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "rgba(240,240,240,0)", padding:"0.1rem" }}>
                {/* <PersonIcon /> */}
                <img className="theme-mode-icon" src={lightModeIcon} alt="" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Light" />
          </ListItem>


          <ListItem  
            {...darkModeSelect} 
            onClick={() => themeSelect("Dark")}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "rgba(240,240,240,0)", padding:"0.1rem" }}>
                {/* <PersonIcon /> */} 
                <img className="theme-mode-icon" src={darkModeIcon} alt="" />
              
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Dark" />
          </ListItem>
        

        
      </List>
    </div>
    </Dialog>
  );
}

ChangeTheme.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
