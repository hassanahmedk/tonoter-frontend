import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ReplayIcon from '@mui/icons-material/Replay';
import NotesIcon from '@mui/icons-material/Notes';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import { fetchNotes } from "../../../redux/notes";

function NotesHeader (props){
    const {themeStyles:{notesSection:{notesHeader}}} = useSelector(state => state.theme);
    const dispatch = useDispatch();

    return(
        <div className="notes-header" style={notesHeader}>

            <div className="notes-header-top" style={notesHeader.notesHeaderTop}>
                <h2 className='notes-header-title'> <NotesIcon fontSize='Large' /> Home</h2>
            </div>
            <div className="notes-header-bottom" style={notesHeader.notesHeaderBottom}>
                <p>{props.noOfNotes} Notes</p>

                <div style={notesHeader.notesHeaderIcons} className="notes-header-icons"> 
                    <KeyboardArrowUpOutlinedIcon fontSize="large" 
                        className="notes-header-icon"
                    />
                    <KeyboardArrowDownOutlinedIcon fontSize="large" 
                        className="notes-header-icon"
                    />
                    <ReplayIcon 
                        className="notes-header-icon notes-header-replay"
                        onClick={()=>{dispatch(fetchNotes())}}
                    />
                </div>
            </div>
        </div>

    );
}


export default NotesHeader;