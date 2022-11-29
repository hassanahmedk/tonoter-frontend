import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import StyleIcon from '@mui/icons-material/Style';

import { useDispatch } from 'react-redux';
import { setActiveScreen,setFavoriteNotes, SCREENS } from "../../../redux/notes";

function HeaderMiddle(props){
    const dispatch = useDispatch();

    return(

        <div className="header-component header-middle">
            <HomeIcon 
                style={props.themeStyle} 
                className="header-icon header-middle-icon" 
                onClick = {()=>{dispatch(setActiveScreen(SCREENS.HOME))}}
                fontSize="Large" 
                />
            <StarIcon 
                style={props.themeStyle} 
                className="header-icon header-middle-icon" 
                fontSize="Large" 
                onClick = {()=>{
                    dispatch(setFavoriteNotes());
                    dispatch(setActiveScreen(SCREENS.FAVORITE));
                }}
                />
            <DeleteIcon style={props.themeStyle} className="headerIcon" />
            {/* <StyleIcon style={props.themeStyle} className="headerIcon" /> */}
        </div>

    );
}

export default HeaderMiddle;