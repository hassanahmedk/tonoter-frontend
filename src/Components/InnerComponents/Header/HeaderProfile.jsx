import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import ChangeTheme from "../Misc/ChangeTheme";

import { setLoggedIn } from "../../../redux/userEntry";

// import defaultProfilePic from "../../../assets/illustrations/default-profile.svg" 
import defaultProfilePic from "../../../assets/illustrations/man(1).png" 


export default function AccountMenu() {
  const dispatch = useDispatch();
  const {themeStyles:{menu:headerMenu}} = useSelector(state => state.theme)

  const [themeMenu, setThemeMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);


  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function toggleThemeMenu(){
    setThemeMenu(!themeMenu);
}


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setLoggedIn(false));
  }

  return (
    <React.Fragment>
        {/* Themes Menu, will trigger after clicking on change theme option below*/}
        <ChangeTheme
            open = {themeMenu}
            onClose = {toggleThemeMenu}
        />
        <Tooltip title="Account settings" sx={{padding:0}}>
          <Button
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={{width:"10%"}}
          >
            {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
            <img className="defaultProfileIcon" src={defaultProfilePic} alt="a" />
          </Button>
        </Tooltip>
      <Menu
        sx={{
          "& .MuiPaper-root": headerMenu
        }}
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            paddingRight:1,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: 12,
              width: 10,
              height: 10,
              bgcolor: headerMenu,
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={()=>{toggleThemeMenu()}}>
          <ListItemIcon>
            <WallpaperIcon fontSize="small" />
          </ListItemIcon>
          Change Theme
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
