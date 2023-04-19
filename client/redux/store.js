import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice/orderSlice";



export const store = configureStore({
    reducer: {
        order: orderSlice,
     
    }
})