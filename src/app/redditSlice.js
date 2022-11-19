import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";



export const getSubredits = createAsyncThunk(
    'subreddts/fetchSubredits',
    async () => {
        fetch("https://www.reddit.com/subreddits.json").then((responce) => responce.json)
    }
)

const subredditSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [], 
        isLoading: false,
        hasError: false
    },
    reducers: {
        getSubreddit: (state, action) => {
            state.subreddits.push(action.payload.data.children)
        }
    }
})