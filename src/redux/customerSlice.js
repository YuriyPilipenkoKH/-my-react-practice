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

    name: 'customers',
    initialState: {
        customers: [],
      
    },
    reducers: {
        ADD_CUSTOMER(state, action) {
           return {...state, customers: [...state.customers, action.payload]}

        
        },
        
        REMOVE_CUSTOMER(state, action) {
            return {...state, customers: [...state.customers.filter(customer => customer.id !== action.payload)]}
        },

    }
})

export const {ADD_CUSTOMER,  REMOVE_CUSTOMER}  = customerSlice.actions