import { createSlice } from "@reduxjs/toolkit";

import styles from "../assets/css-js/themes"

let {defaultLight, defaultDark} = styles;

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        selectedTheme: 'defaultDark',
        themeStyles:defaultDark
    },

    reducers:{
        setTheme(state, action){
            if(action.payload === "Light"){
                state.selectedTheme =  "defaultLight";
                state.themeStyles = defaultLight;
            } else if(action.payload === "Dark"){
                state.selectedTheme =  "defaultDark";
                state.themeStyles = defaultDark;
            }
        }

    }
})

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;


