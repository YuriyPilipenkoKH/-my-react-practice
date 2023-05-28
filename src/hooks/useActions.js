import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actions } from "redux/favoritesSlice"
import userSlice from "redux/user/user.slice"

const rootActions = {
    ...actions,
    ...userSlice.actions,
    
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => 
        bindActionCreators(rootActions, dispatch) , [dispatch])
}