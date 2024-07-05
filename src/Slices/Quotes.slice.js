import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAllQuotes = createAsyncThunk('Quotes', async (payload) => {
    try {
        const { data } = await axios.get('https://dummyjson.com/quotes', payload);
        return data;
    } catch(error) {
        return error;
    }
});

const quotesSlice = createSlice({
    name : 'Quotes',
    initialState : {
        isLoading : false,
        data : [],
        error : null
    },
    reducers : {

    },
    extraReducers : (builder) => {
        builder 
            .addCase(GetAllQuotes.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(GetAllQuotes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(GetAllQuotes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
})

export default quotesSlice.reducer