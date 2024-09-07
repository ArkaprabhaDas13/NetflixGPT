import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",

    initialState: {
        nowPlayingMovies : null,
        polularMovies : null,
        upcomingMovies : null,
        trailerVideo : null,
        nowWatching : null,
        nowWatchingKey: null
    },

    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },

        addUpcomingMovies: (state, action)=>{
            state.upcomingMovies = action.payload;
        },

        addTrailerVideo: (state, action)=>{
            state.trailerVideo = action.payload
        },

        addNowWatching: (state, action)=>{
            state.nowWatching = action.payload
        },

        addNowWatchingKey: (state, action)=>{
            state.nowWatchingKey = action.payload
        }
    }
})

export default movieSlice.reducer;
export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies, addNowWatching, addNowWatchingKey} = movieSlice.actions;