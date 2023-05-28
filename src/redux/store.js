import { configureStore } from "@reduxjs/toolkit";
import { cashSlice } from "./cashSlice";
import { customerSlice } from "./customerSlice";
// import { applyMiddleware } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension/";



export const store = configureStore({

    reducer: {
        account: cashSlice.reducer,
        customers: customerSlice.reducer,
    },

//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(thunk),
//   enhancers: [composeWithDevTools()],

})   

