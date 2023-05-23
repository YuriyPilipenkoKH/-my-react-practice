import { useSelector, useDispatch } from 'react-redux'
import { logOut } from 'redux/userSlice'

const UserMenu = () => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.user.login)

    const handleLogOut =() => {
        dispatch(logOut())
    }

  return (
    <div>
        {login}
        <button 
        onClick={handleLogOut}
        >Log Out</button>
    </div>
  )
}

export default UserMenu
