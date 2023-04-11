import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {}
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrder: (state, payload) => {
            state.data = payload.payload;
        }
    }
})

export const {setOrder} = orderSlice.actions;

export default orderSlice.reducer;