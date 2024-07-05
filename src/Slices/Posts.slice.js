import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllPosts = createAsyncThunk('Posts', async (payload) => {
    try{
        const {data} = await axios.get('https://dummyjson.com/posts', payload);
        return data;
    } catch(error) {
        return error;
    }
});

const postsSlice = createSlice({
    name : 'Posts',
    initialState : {
        isLoading : false,
        data : [],
        error : null
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchAllPosts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
});

export default postsSlice.reducer;