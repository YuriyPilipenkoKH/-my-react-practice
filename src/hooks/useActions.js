import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actions } from "redux/favoritesSlice"

const rootActions = {
    ...actions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => 
        bindActionCreators(rootActions, dispatch) , [dispatch])
}