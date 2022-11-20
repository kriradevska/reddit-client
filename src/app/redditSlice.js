import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";



export const fetchSubreddits = createAsyncThunk(
    'subreddts/getSubreddit', // action type
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
        addSubreddit: (state, action) => {
            state.subreddits.push(action.payload)
        }
    },
    extraReducers: {
        [fetchSubreddits.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.subreddits.push(action.payload);
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchSubreddits.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const {
    addSubreddit
} = subredditsSlice.actions;

export default subredditsSlice.reducer;