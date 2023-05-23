import React from 'react'
import { Link } from 'react-router-dom'
import UserMenu from 'components/UserMenu/UserMenu'
import { StyledBar } from './AppBar.styled'
import { useSelector } from 'react-redux'


const AppBar = () => {
    const isLoggedIn  = useSelector(state => state.user.isLoggedIn )

  return (
    <StyledBar>
       <nav>
            <Link to ='/login'>Login</Link>
          
        </nav>
        {isLoggedIn && <UserMenu/>}
    </StyledBar>
  )
}

export default AppBar
