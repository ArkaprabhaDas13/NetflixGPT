import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({

    name: "config",

    initialState:{
        language: "english"
    },

    reducers:{
        languageFunc: (state, action)=>{
            console.log("ACTION.PAYLOAD -> ", action.payload )
            state.language = action.payload
        }
    }
    
})

export default configSlice.reducer;
export const {languageFunc} = configSlice.actions;