import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from './favoritesSlice'

const reducers = combineReducers({
    favorites: favoritesReducer,
})
console.log(reducers);

export const store = configureStore({

    reducer: reducers,

})   
