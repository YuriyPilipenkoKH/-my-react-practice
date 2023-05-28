import { createSlice } from "@reduxjs/toolkit";


export const user1Slice = createSlice({


    name: 'user',
    initialState: {
        login: '',
        isLoggedIn: false,
    },
    reducers: {
        logIn(state, action) {
            state.login = action.payload
            state.isLoggedIn =true
        
        },
        
        logOut(state) {
            state.login = ''
            state.isLoggedIn =false
        },

    }
})

export const {logIn, logOut}  = user1Slice.actions