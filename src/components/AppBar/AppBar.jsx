import React from 'react'
import { Link } from 'react-router-dom'
import UserMenu from 'components/UserMenu/UserMenu'
import { StyledBar, StyledNav } from './AppBar.styled'
import { useSelector } from 'react-redux'


const AppBar = () => {
    const isLoggedIn  = useSelector(state => state.user.isLoggedIn )

  return (
    <StyledBar>
       <StyledNav>
        {!isLoggedIn && <Link to ='/login'>Login</Link> }
        {isLoggedIn && <Link to ='/dashboard'>Dashboard</Link>}    
             
        </StyledNav>
        {isLoggedIn && <UserMenu/>}
    </StyledBar>
  )
}

export default AppBar
