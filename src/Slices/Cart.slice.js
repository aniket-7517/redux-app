import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCart = createAsyncThunk('Carts', async (payload) => {
    try {
        const {data} = await axios.get('https://dummyjson.com/carts', payload);
        return data;
    } catch(error) {
        return error;
    }
});

const cartslice = createSlice({
    name : 'Cart',
    initialState : {
        isLoading : false,
        data : [],
        error : null
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder
            .addCase(getAllCart.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(getAllCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getAllCart.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
});

export default cartslice.reducer;