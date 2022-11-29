import {useEffect, useState} from "react"
import {  TransitionGroup, CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from "react-redux";
import {fetchNotes, STATUSES, SCREENS} from "../redux/notes"
import { showSearchbar } from "../redux/search";


import Note from "./InnerComponents/NotesSection/Note";
import NotesHeader from "./InnerComponents/NotesSection/NotesHeader";
import Search from "./InnerComponents/NotesSection/Search";
import NotesSkeletonLoader from "./InnerComponents/NotesSection/NotesSkeletonLoader";

import "../assets/css/notes.css";   
import 'animate.css';




function NotesSection (props){
    const dispatch = useDispatch();

    const {notes, status, searchedNotes,favoriteNotes, activeScreen} = useSelector(state => state.notes)
    const {searchbarClass, notesSectionClass} = useSelector(state => state.search); 

    let notesToRender = [];

    const {themeStyles:{notesSection}} = useSelector(state => state.theme);

    if(activeScreen === SCREENS.SEARCH){
        notesToRender = searchedNotes;
    } else if(activeScreen === SCREENS.FAVORITE){
        notesToRender = favoriteNotes;
    } else {
        notesToRender = notes;
    }

/*
    let notes = [
        {title:"Sample Notes 1", 
        content:"lorem ipsum sit amet this lorem ipsum sit amet this lorem ipsum sit amet this  sit amet this that  sit amet this amet this that...",
        tags:["this", "that"]
        }, 
        {title:"Sample Notes 2", 
        content:"lorem ipsum sit amet this lorem ipsum sit amet this lorem ipsum sit amet this  sit amet this that  sit amet this amet this that...",
        tags:["this", "that"]
        }, 
        {title:"Sample Notes 3", 
        content:"lorem ipsum sit amet this lorem ipsum sit amet this lorem ipsum sit amet this  sit amet this that  sit amet this amet this that...",
        tags:["this", "that"]
        },
        {title:"Sample Notes 4", 
        content:"lorem ipsum sit amet this lorem ipsum sit amet this lorem ipsum sit amet this  sit amet this that  sit amet this amet this that...",
        tags:["this", "that"]
        }, 
        {title:"Sample Notes 5", 
        content:"lorem ipsum sit amet this lorem ipsum sit amet this lorem ipsum sit amet this  sit amet this that  sit amet this amet this that...",
        tags:["this", "that"]
        }, 
        {title:"Sample Notes 6", 
        content:"lorem ipsum sit amet this lorem ipsum sit amet this lorem ipsum sit amet this  sit amet this that  sit amet this amet this that...",
        tags:["this", "that"]
        }
    ];
   */
    useEffect(() => {

        dispatch(fetchNotes());
    
         // setIsLoading(false);
    
      }, [])


    const [noteSelected, setNoteSelected] = useState(false);

    function makeNoteSelected(){
        setNoteSelected(true);
    }
    function noNotesSelected(){
        setNoteSelected(false);
    }


    if(status===STATUSES.LOADING){
    // if(false){
        return (
            <div id="notes-screen" style={notesSection.notesScreen}>
                <NotesHeader noOfNotes={notesToRender.length} />
                {/* <CircularLoader />  */}
                <NotesSkeletonLoader />
            </div>
        )
    } else if(status===STATUSES.ERROR){
        return (
            <div id="notes-screen" style={notesSection.notesScreen}>
                <NotesHeader noOfNotes={notesToRender.length} />
                <h2>Something went wrong</h2>
            </div>
        )
    } 


    
    return(

        <div id="notes-screen" style={notesSection.notesScreen}>

                
            <NotesHeader noOfNotes={notes.length} />


            <div className={searchbarClass}>
                <Search />
            </div>  

            {notes.length === 0 ?

            <div className="noNotesText" style={notesSection.noNotesText}>
                <h2> 
                    No notes to display, add now :)
                </h2>
            </div>

            :
                  
                <TransitionGroup id="notes-section" className={notesSectionClass}>
                    {
                        notesToRender.map(function(note){
                            return (
                                <CSSTransition key={note._id} classNames={{
                                    enterActive: 'animate__animated animate__fadeIn',
                                    exitActive: 'animate__animated animate__fadeOut'
                                  }} timeout={500}>

                                    <Note 
                                        id={note._id} 
                                        title = {note.title} 
                                        content = {note.content} 
                                        tags = {note.tags} 
                                        key={note._id} 
                                        favorite={note.favorite}
                                        dateModified={note.dateModified}
                                        populateDisplaySection = {props.populateDisplaySection}
                                        unpopulateDisplaySection = {props.unpopulateDisplaySection}
                                        noteSelected = {noteSelected}    
                                        makeNoteSelected = {makeNoteSelected}
                                        noNotesSelected = {noNotesSelected}
                                    /> 

                                </CSSTransition>
                            )
                        })
                    }
                
            </TransitionGroup>
        
        }
        </div>
    );
}


export default NotesSection;