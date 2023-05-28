import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'redux/favoritesSlice';

const CarItem = ({car}) => {
    // const favorites = useSelector(state => {
    //     console.log(state)
    //    return state.favorites})
    const {favorites}  = useSelector(state => state)
    console.log(favorites);

    const dispatch = useDispatch()

    
  return (
    <div>
        <h3>{car.name}</h3>
        <button
        onClick={() => dispatch(actions.toggleFavorites(car)) }
        >Add to favorites</button>
    </div>
  )
}

export default CarItem