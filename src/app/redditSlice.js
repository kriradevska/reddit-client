import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";



export const getSubredits = createAsyncThunk(
    'subreddts/fetchSubredits',
    async () => {
        fetch("https://www.reddit.com/subreddits.json").then((responce) => responce.json)
    }
)

const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [], 
        isLoading: false,
        hasError: false
    },
    reducers: {
        getSubreddit: (state, action) => {
            state.subreddits.push(action.payload)
        }
    },
    extraReducers: {
        [getSubredits.pending]: (action, payload) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [getSubredits.fulfilled]: (action, payload) => {
            state.subreddits.push(action.payload);
            state.isLoading = false;
            state.hasError = false;
        },
        [getSubredits.rejected]: (action, payload) => {
            stat.isLoading = false;
            state.hasError = true;
        }
    }
})

export const {
    getSubreddit
} = subredditsSlice.actions;

export default subredditsSlice.reducer;