import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes";
import  themeReducer  from "./theme";
import searchReducer from "./search";
import userEntryReducer from "./userEntry"
import displayReducer from "./display"

export default configureStore({
  reducer: {
    notes: notesReducer,
    theme: themeReducer,
    search: searchReducer,
    userEntry: userEntryReducer,
    display: displayReducer,
  }
});

