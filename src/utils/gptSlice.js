import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({

    name: 'gpt', 

    initialState:{
        showGptSearch: false,
        gptMovies: null, 
        movieNames: null
    },

    reducers:{
        toggleGptLogic: (state, action)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addMovies: (state, action)=>{
            const {movieResults, movieNames} = action.payload
            state.gptMovies = movieResults
            state.movieNames = movieNames
        }
    }

})

export default gptSlice.reducer;
export const {toggleGptLogic, addMovies} = gptSlice.actions;