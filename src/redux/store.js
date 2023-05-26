import { configureStore } from "@reduxjs/toolkit";
import { cashSlice } from "./cashSlice";
import { customerSlice } from "./customerSlice";



export const store = configureStore({

    reducer: {
        account: cashSlice.reducer,
        customers: customerSlice.reducer,
    },



})   
