import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import NotesIcon from '@mui/icons-material/Notes';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {unpopulateDisplaySection} from "../../../redux/display";

function DisplayHeader(props) {
    const dispatch = useDispatch();

    const {themeStyles:{display:{displayHeader}}} = useSelector(state => state.theme)

  return (
    <div className="display-header">
        <div className="display-header-top">
            <div className="display-header-logo" style={displayHeader.displayHeaderTop}>
                <NotesIcon />
                <span>Home</span>
                    
            </div>
            <div className="display-header-menu">
                <Button className="display-button-edit" size="small" variant="contained">Edit</Button>
                <CloseIcon
                 onClick={()=>{
                    dispatch(unpopulateDisplaySection());
                    document.querySelector(".note-selected").classList.remove("note-selected");
                }}   
                 style={{color: displayHeader.displayHeaderTop.color, cursor:"pointer"}}/>
            </div>
        </div>
        <div className="display-header-bottom" style={displayHeader.displayHeaderBottom}>
            <p>Last Modified: {props.date}</p>
        </div>
    </div>
  )
}

export default DisplayHeader;