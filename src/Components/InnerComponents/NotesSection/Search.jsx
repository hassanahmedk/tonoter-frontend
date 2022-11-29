import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';



import { useDispatch } from "react-redux";
import { showSearchbar } from "../../../redux/search";

import { searchNotes, setActiveScreen, SCREENS } from "../../../redux/notes";

// import { setSearchStatus } from "../../../redux/notes";

export default function Search() {

  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  function handleSearchQuery (event) {
    setSearchQuery(event.target.value);
    dispatch(searchNotes(event.target.value));

    if(event.target.value===""){
      // will show all notes if user hasn't type anything in the searchbox
      dispatch(setActiveScreen(SCREENS.HOME));
    } else {
      dispatch(setActiveScreen(SCREENS.SEARCH));
    }
    
  }


  return (
    <Paper
      component="form"
      // className="searchbar"
      style={{width: "30rem"}}
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Notes"
        inputProps={{ "aria-label": "search notes" }}
        onChange={handleSearchQuery}
        value={searchQuery}
      />
      {/* <IconButton type="button" color="primary" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton> */}
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> 
      <IconButton sx={{ p: '10px' }} aria-label="directions">
        <CloseIcon onClick={()=>{
          dispatch(showSearchbar()); 
          setSearchQuery(""); 
          dispatch(setActiveScreen(SCREENS.HOME));
          }} />
      </IconButton>   
      </Paper>
  );
}
