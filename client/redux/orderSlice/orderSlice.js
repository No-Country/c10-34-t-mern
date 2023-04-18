import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order: {
        user: "",
        barber: "",
        date: "",
        service: [],
        product: ""
    }
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setBarber: (state, payload) => {
            state.order.barber = payload.payload;
        },
        setDate: (state, payload) => {
            state.order.date = payload.payload
        },
        setServices: (state, payload) => {
            state.order.service.push(payload.payload)
        }
    }
})

export const {setOrder, setDate, setServices} = orderSlice.actions;

export default orderSlice.reducer;