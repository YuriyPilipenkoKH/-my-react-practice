import { createSlice } from "@reduxjs/toolkit";
 
export const favoritesSlice  = createSlice({
    
    name: 'favorites',
    initialState: [],

    reducers: {
        toggleFavorites: (state, action) =>  {
            const car = action.payload
            const isExist = state.some(r => r.id  === car.id)

          if (isExist) {
                const index = state.findIndex(item => item.id === car.id)
                if(index !== -1) {state.splice(index, 1) }
          }  
           else 
           { state.push(car )}
        }
    }
})

export const {actions, reducer} = favoritesSlice