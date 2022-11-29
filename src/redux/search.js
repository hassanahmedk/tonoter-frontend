import { createSlice } from "@reduxjs/toolkit";



export const searchSlice = createSlice({
    name: "searchbar",
    initialState: {
        searchbarShown: false,
        notesSectionClass: "",
        searchbarClass: "searchbar",
    },

    reducers:{
        showSearchbar(state){
            state.searchbarShown = !state.searchbarShown;
            state.searchbarShown ? state.searchbarClass = "searchbar searchbar-mounted" :  state.searchbarClass = "searchbar";
            state.searchbarShown ? state.notesSectionClass = "notes-section-translateY" :  state.notesSectionClass = "";
        }
    }
})

export const { showSearchbar } = searchSlice.actions;

export default searchSlice.reducer;


