import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",

    initialState: {
        nowPlayingMovies : null,
        polularMovies : null,
        upcomingMovies : null,
        trailerVideo : null
    },

    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
            // console.log("Redux movie store =", state.nowPlayingMovies)
        },

        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },

        addUpcomingMovies: (state, action)=>{
            state.upcomingMovies = action.payload;
        },

        addTrailerVideo: (state, action)=>{
            state.trailerVideo = action.payload
        }

    }
})

export default movieSlice.reducer;
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies} = movieSlice.actions;