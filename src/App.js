import {useState, useEffect} from  "react";
import { useDispatch, useSelector } from "react-redux";
import { resetNoteAction } from "./redux/notes";

import { setLoggedIn, setLoggedInUser } from "./redux/userEntry";
import { setCurrentUserId } from "./redux/notes";


import { ThemeProvider, createTheme } from '@mui/material/styles';


import Entry from "./Components/Entry";
import Header from "./Components/Header";
import NotesSection from "./Components/NotesSection";
import Display from "./Components/Display";


import "./assets/css/style.css"
import SimpleSnackbar from "./Components/InnerComponents/Misc/Snackbar";


function App() {

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if(loggedInUser){
      dispatch(setLoggedIn(true));
      // const foundUser = JSON.parse(JSON.stringify(loggedInUser));
      const foundUser = JSON.parse(loggedInUser);

      dispatch(setCurrentUserId(foundUser.username));
      console.log("appjsun: " + foundUser.username);
      // // dispatch(setLoggedInUser(JSON.parse(loggedInUser)));
      console.log("aaa: " + foundUser);
    }
  }, [])
  

  const {noteActions} = useSelector(state => state.notes);
  const {loggedIn} = useSelector(state => state.userEntry);
  const {selectedTheme} = useSelector(state => state.theme);

  const dispatch = useDispatch();

  let muiTheme = "light";
  if(selectedTheme === "defaultDark"){
    muiTheme="dark";
  }

  const entryTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: '#efc16a',
        contrastText: 'rgba(250,250,250,0.9)',
      },
      secondary: {
        main: '#efc16a',
        contrastText: 'rgba(250,250,250,0.9)',
      },
    },
  });

  const appTheme = createTheme({
    palette: {
      mode: muiTheme,
      primary: {
        main: '#efc16a',
        contrastText: 'rgba(250,250,250,0.9)',
      },
      secondary: {
        main: '#efc16a',
        contrastText: 'rgba(250,250,250,0.9)',
      },
    },
  });




  let [noteToDisplay, setNoteToDisplay] = useState({title:"", content:"", tags:"", author:"", dateModified:""})
  let [isPopulated, setIsPopulated] = useState(false);


  function populateDisplaySection (title, content, tags, author, dateModified){
    setNoteToDisplay({title, content, tags, author, dateModified});
    setIsPopulated(true);
    
  }
  function unpopulateDisplaySection (){
    setIsPopulated(false);
  }

  return !loggedIn ? <ThemeProvider theme={entryTheme}>
                        <Entry />
                     </ThemeProvider>
  
  : (
    <>
    <ThemeProvider theme={appTheme}>

        {/* Will show when a note is added, deleted or edited */}
        <SimpleSnackbar 
        open={noteActions.status}
        autoHideDuration={4000}
        onClose={()=>{dispatch(resetNoteAction())}}
        action={noteActions.action}  
        />

      <div id="landing">
        
    

        <Header />
        <NotesSection unpopulateDisplaySection={unpopulateDisplaySection} populateDisplaySection = {populateDisplaySection} />
        <Display isPopulated={isPopulated} noteToDisplay={noteToDisplay}/>

        

      </div>
      </ThemeProvider>
    

      </>

      
    );
}

export default App;


// Done
/*
username is available
Display on click
transfer searchState to activeScreen
reload button for mobile version
scrolling down only notesscreen and not notesheader
custom scrollbar
if no notes are there, display message "Click to add notes" 
Color scheme and mui themes
click display note, refactor with redux 
*/


/* DUE  */ 
// Fix Date, date format will be string in db // STILL ISSUE
// login animation
// signup pic display
// customize display screen
// colorful tags with mui chips

// transition on display idle and display screen


// Add avatars


// FIX BUG Adding new note without content adds up prev note content
// FIX BUG Clicking on note everywhere should show display tab
// OPT: deleted section
// BIG OPT: custom scrollbar for notes and display
// BUG: not getting favroited on search