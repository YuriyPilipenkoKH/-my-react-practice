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
export const cashSlice = createSlice({

    name: 'cash',
    initialState: {
        cash: 900,
      
    },
    reducers: {
        ADD_CASH(state, action) {
           return {...state, cash: state.cash + action.payload}

        
        },
        
        GET_CASH(state, action) {
            return {...state, cash: state.cash - action.payload}
        },

    }
})

export const {ADD_CASH, GET_CASH}  = cashSlice.actions