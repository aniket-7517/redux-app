import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk('Products', async (payload) => {
    try {
        const { data } = await axios.get('https://dummyjson.com/products', payload);
        return data;
    } catch(error) {
        return error;
    }
});

const productSlice = createSlice({
    name : 'Products',
    initialState : {
        isLoading : false,
        data : [],
        error : null
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export default productSlice.reducer;