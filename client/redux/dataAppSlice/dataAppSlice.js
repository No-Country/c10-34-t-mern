import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    services: "",
    barbers: "",
    locales: ""
}
const dataAppSlice = createSlice({
    name:"dataApp",
    initialState,
    reducers:{
        setServices:(state, payload) => {
            state.services = payload.payload
        },
        setBarbers:(state, payload) => {
            state.barbers = payload.payload
        },
        setLocales: (state, payload) => {
            state.locales = payload.payload
        }
    }
})

export const {setBarbers, setLocales, setServices} = dataAppSlice.actions
export default dataAppSlice.reducer