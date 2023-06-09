import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice/orderSlice";
import infoUserReducer from './infoUserSlice/infoUserSlice'
import tokenInfoReducer from './tokenSlice/tokenSlice'
import dataAppSlice from "./dataAppSlice/dataAppSlice";



export const store = configureStore({
    reducer: {
        order: orderSlice,
        infoReducer:infoUserReducer,
        tokenReducer:tokenInfoReducer,
        dataAppReducer: dataAppSlice
    }
})