import { useActions } from 'hooks/useActions';
import useFavorites from 'hooks/useFavorites';

const CarItem = ({car}) => {
    // const favorites = useSelector(state => {
    //     console.log(state)
    //    return state.favorites})
    // const {favorites}  = useSelector(state => state)
    // console.log(favorites);
    const {favorites} = useFavorites()

    // const dispatch = useDispatch()
    const {toggleFavorites} = useActions()

    //condition exists
    const isExists  = favorites.some(r => r.id === car.id)

  return (
    <div >
        <h3>{car.name}</h3>
        <button
        onClick={() => toggleFavorites(car) }
        // onClick={() => dispatch(actions.toggleFavorites(car)) }
        style={{padding: '4px 16px', width:'120px', borderRadius:'1em' , border:'none'}}
        >
           {isExists 
           ? 'Remove from favorites'
           : 'Add to favorites'}
            </button>
    </div>
  )
}

export default CarItem