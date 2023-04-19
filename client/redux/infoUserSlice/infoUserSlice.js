import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    info:""
}
const infoUserSlice = createSlice({
    name:"infoUser",
    initialState,
    reducers:{
        setInfoUser:(state, payload) => {
            state.info = payload.payload
        }

    }

})

export const {setInfoUser} = infoUserSlice.actions
export default infoUserSlice.reducer