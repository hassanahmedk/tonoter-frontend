import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { showSearchbar } from '../../../redux/search';
import { setSearchStatus } from '../../../redux/notes';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import AddIcon from '@mui/icons-material/Add';

import NewNote from "../NotesSection/NewNote";

import AccountMenu from './HeaderProfile';

import searchIcon from "../../../assets/illustrations/search.png"

function HeaderTop(props){
    const dispatch = useDispatch();
    const {themeStyles:{header:{headerIcon}}} = useSelector(state => state.theme)

// will trigger if window is closed without submitting
    function toggleNewWindow () {
        setNewNoteWindow(!newNoteWindow);
    }
// will trigger if window is closed if form is submitted
    function toggleNewWindowAfterAdd () {
        setNewNoteWindow(!newNoteWindow);
        handleAddSnackbar();
    }
    
    const [addSnackbar, setAddSnackbar] = useState(false);

    function handleAddSnackbar(){
      setAddSnackbar(!addSnackbar);
    }
  



    const [newNoteWindow, setNewNoteWindow] = useState(false);

    return (
        <div className="header-component header-top">
            <NewNote 
                    open={newNoteWindow} 
                    onClose={toggleNewWindow} 
                    onCloseAfterAdd={toggleNewWindowAfterAdd}
                    actionText="Add Note"
            />
            
            {/* <SimpleSnackbar action="Added" open={addSnackbar} onClose= {handleAddSnackbar}/> */}
            <AccountMenu 
                className="header-icon header-search-icon" 
                style={props.themeStyle}/>
            {/* <AccountCircleRoundedIcon 
                fontSize="Large"  
                className="headerIcon headerProfileIcon" /> */}
            {/* <img src={searchIcon} style={props.themeStyle} 
                alt="SearchIcon"
                className="headerIcon headerSearchIcon" 
                onClick={()=>{dispatch(showSearchbar()); dispatch(setSearchStatus(false));}}
                /> */}
            <SearchRoundedIcon style={props.themeStyle} 
                fontSize="Large" 
                className="header-icon headerSearchIcon" 
                sx={{color: "#efc16a"}}
                onClick={()=>{dispatch(showSearchbar()); dispatch(setSearchStatus(false));}}
                />
            <AddIcon  
                onClick={()=>toggleNewWindow()}  
                // fontSize="Large" 
                sx={headerIcon.headerAddIcon}
                className="header-icon header-add-icon"
                // style={{fontSize:"3rem"}}
                />
                
        </div>
    );
}

export default HeaderTop;
