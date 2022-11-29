import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

export const SCREENS = Object.freeze({
  HOME: 'home',
  SEARCH: 'search',
  FAVORITE: 'favorite',
});

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    currentUserId:"",
    status: STATUSES.IDLE,
    noteActions: {status:false, action:""},
    searchedNotes: [],  // For search functionality 
    searchState:false,
    activeScreen: SCREENS.DEFAULT,
    favoriteNotes:[],
  },

  reducers: {
    setNotes(state, action){
      state.activeScreen = "Home";
      state.notes = action.payload;
    },

    setActiveScreen(state, action){
      state.activeScreen = action.payload;
    },

    setFavoriteNotes(state, action){
      state.favoriteNotes = state.notes.filter((note)=> note.favorite === true)
    },

    // After any note is added, adding it in the local data instead of fetching again from db
    updateNotes(state, action){
      state.notes.push(action.payload);
      state.noteActions.status = true;
      state.noteActions.action = "Added";
    },

    // After any note is deleted, deleting the local copy instead of fetching again from db
    deleteNoteFromState(state, action){
      console.log("in red");
      state.notes = state.notes.filter((note) => note._id !== action.payload);
      state.noteActions.status = true;
      state.noteActions.action = "Deleted";
      
    },

    // After note is edited, editing the local copy instead of fetching again from db
    EditNoteFromState(state, action){
      
      let updatedNotes = [];
      let {title, content, tags} = action.payload.noteDataJSON; 
      
      state.notes.forEach(function(note){
          if(note._id === action.payload.noteId){
              note.title = title; 
              note.content = content; 
              note.tags = tags;
          }
          updatedNotes.push(note);
      })
      state.notes = updatedNotes;
      state.noteActions.status = true;
      state.noteActions.action = "Edited";
    },

    makeFavorite(state, action){
      let updatedNotes = [];
      let {favorite} = action.payload.noteDataJSON; 
      
      state.notes.forEach(function(note){
          if(note._id === action.payload.noteId){
              note.favorite = favorite; 
          }
          updatedNotes.push(note);
      })
      state.notes = updatedNotes;
    },

    // Notes loading, loaded etc
    setStatus(state, action){
      state.status = action.payload
    },

    // Resetting snackbar of "Note added", "Note deleted" etc
    resetNoteAction(state, action){
      state.noteActions.status = false;
      state.noteActions.action = "";
    },

    searchNotes(state, action){
      state.searchedNotes = state.notes.filter((note)=>{return note.title.includes(action.payload)});
    },

    setCurrentUserId(state, action){
      console.log("setting id");
      state.currentUserId = action.payload
    },

  }
});

// Action creators are generated for each case reducer function
export const { 
  setActiveScreen,
  makeFavorite, setFavoriteNotes,
  setNotesAfterAdd, 
  setCurrentUserId, 
  setStatus, setNotes, 
  updateNotes, deleteNoteFromState, 
  EditNoteFromState, resetNoteAction, 
  searchNotes, setSearchStatus } = notesSlice.actions;

export default notesSlice.reducer;



// Thunks

export function fetchNotes(){
  return async function fetchNotesThunk(dispatch, getState){
    dispatch(setStatus(STATUSES.LOADING));

    try {
      fetch(`https://${process.env.REACT_APP_API_URL}/notes/${getState().notes.currentUserId}/0`)
             .then((response) => response.json())
             .then((data) => {
               setTimeout(()=>{
                 dispatch(setNotes(data[0].notes));
                 dispatch(setStatus(STATUSES.IDLE));
               }, 500);
               
           })
               
   }catch (err) {
    console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
   }
}



export function addNote(noteData){
  return async function fetchNotesThunk(dispatch, getState){
    try {
      const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
      ];
      const date = new Date();
      let noteDataJSON = {
        ...noteData,
        tags: noteData.tags.split(","),
        dateModified: date.getDate() + " " + monthNames[date.getMonth()],
        author: "Hassan"
      }    
        
      fetch(`https://${process.env.REACT_APP_API_URL}/notes/${getState().notes.currentUserId}/0`, {
        method: "POST",
        headers: {
          'Content-type' : "application/json"
        },
        body: JSON.stringify(noteDataJSON)
      })
      .then(res => res.json())
      .then(data => {
        dispatch(setNotes(data.notes));
        noteDataJSON={};
      })
               
   } catch (err) {
     console.log(err);
   }
  }
}

export function deleteNote(noteId){
  return async function deleteNoteThunk(dispatch, getState){
    try {
      fetch(`https://${process.env.REACT_APP_API_URL}/notes/${getState().notes.currentUserId}/${noteId}`
      , {
        method:"DELETE"
    })
    .then(dispatch(deleteNoteFromState(noteId)))


               
   } catch (err) {
     console.log(err);
   }
  }
}

export function editNote(noteId, noteData, action){
  return async function editNoteThunk(dispatch, getState){
    let tags = noteData.tags.toString().split(",");
    let noteDataJSON = {};

    action === "makeFavorite" && dispatch(makeFavorite({noteId, noteDataJSON}))                              


    console.log(noteData.favorite);
    try {
      if(action === "makeFavorite"){
        noteDataJSON = {
          ...noteData,
          tags,
          dateModified: new Date(),
          author: "Hassan",
          favorite: !noteData.favorite,
        }    
      } else {
        noteDataJSON = {
          ...noteData,
          tags,
          dateModified: new Date(),
          author: "Hassan"
        }    
      }

      action === "makeFavorite" && dispatch(makeFavorite({noteId, noteDataJSON}))                              
        
      fetch(`https://${process.env.REACT_APP_API_URL}/notes/${getState().notes.currentUserId}/${noteId}`, {
        method: "PUT",
        headers: {
          'Content-type' : "application/json"
        },
        body: JSON.stringify(noteDataJSON), 
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        action !== "makeFavorite" && dispatch(EditNoteFromState({noteId, noteDataJSON}));                            
      })
               
   } catch (err) {
     console.log(err);
   }
  }
}