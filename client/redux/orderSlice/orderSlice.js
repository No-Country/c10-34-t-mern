import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    order: {
        user: "",
        barber: "",
        date: "",
        service: []
    },
    orderInfo:{
        barberName: [],
        dateName: "",
        services: [],
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
        },
        setUserId: (state, payload) => {
            state.order.user = payload.payload
        },
        setBarberName: (state, payload) => {
            state.orderInfo.barberName.push(payload.payload)
        },
        setDateName: (state, payload) => {
            state.orderInfo.dateName = payload.payload
        },
        setServicesName: (state, payload) => {
            state.orderInfo.services.push(payload.payload)
        }
    }
})

export const {setOrder, setDate, setServices, setUserId, setBarberName, setDateName, setServicesName} = orderSlice.actions;

export default orderSlice.reducer;