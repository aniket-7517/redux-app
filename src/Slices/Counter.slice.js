import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'Counter',
    initialState : {
        value : 0
    },
    reducers : {
        increment : (state) => {
            return {value : state.value + 1}
        },

        decrement : (state) => {
            return {value : state.value - 1}
        },

        reset : (state) => {
            return {value : 0}
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;