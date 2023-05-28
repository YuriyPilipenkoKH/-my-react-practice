import { useSelector } from "react-redux"


const useFavorites = () => {
const {favorites}  = useSelector(state => state)

  return {favorites}
}

export default useFavorites