import { createSlice } from "@reduxjs/toolkit";


export const displaySlice = createSlice({
  name: "display",
  initialState: {
    status: false,
    noteToDisplay: {
        id: "",
        title: "",
        content: "",
        tags: [],
        author:"",
        dateModified:"",
    },
    anyNoteSelected:false,
  },

  reducers: {
    populateDisplaySection(state, action){
      state.status = true;  
      state.noteToDisplay = action.payload
      state.anyNoteSelected=true;
    },
    unpopulateDisplaySection(state, action){
      state.status = false;  
      state.noteToDisplay = {
        id: "",
        title: "",
        content: "",
        tags: [],
        author:"",
        dateModified:"",
        }
        state.anyNoteSelected=false;
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

  }
});

// Action creators are generated for each case reducer function
export const { populateDisplaySection, unpopulateDisplaySection } = displaySlice.actions;
export default displaySlice.reducer;


