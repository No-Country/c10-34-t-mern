import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tokenInfo:"token"
}
const tokenSlice = createSlice({
    name:"token",
    initialState,
    reducers: {
        setToken:(state, payload) => {
            state.tokenInfo = payload.payload
        }
    }
})

export const {setToken} = tokenSlice.actions
export default tokenSlice.reducer