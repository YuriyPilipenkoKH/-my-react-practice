import { createSlice } from "@reduxjs/toolkit";


// const reducer  = (state, action) => {
//     switch (action.type )  {
//         case 'ADD_CASH':
//             return {...state, cash: state.cash + action.payload}

//         case 'GET_CASH':
//         return {...state, cash: state.cash}

//         default: 
//         return state
//     }

// }
export const customerSlice = createSlice({

    name: 'customer',
    initialState: {
        cash: 500,
      
    },
    reducers: {
        ADD_CUSTOMER(state, action) {
           return {...state, cash: state.cash + action.payload}

        
        },
        
        GET_CUSTOMER(state, action) {
            return {...state, cash: state.cash - action.payload}
        },

    }
})

export const {ADD_CASH, GET_CASH}  = customerSlice.actions