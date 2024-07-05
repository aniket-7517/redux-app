import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userInfoAPI = createAsyncThunk('User', async (payload) => {
    try {
        const { data } = await axios.post('https://dummyjson.com/auth/login', payload);
        return data;
    } catch(error) {
        return error;
    }
});

const userSlice = createSlice({
    name : 'User',
    initialState : {
        isLoading : false,
        data : null,
        error : null
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder
            .addCase(userInfoAPI.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(userInfoAPI.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(userInfoAPI.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export default userSlice.reducer;