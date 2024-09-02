import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({

    name: 'gpt', 

    initialState:{
        showGptSearch: false
    },

    reducers:{
        toggleGptLogic: (state, action)=>{
            state.showGptSearch = !state.showGptSearch
        }
    }

})

export default gptSlice.reducer;
export const {toggleGptLogic} = gptSlice.actions;