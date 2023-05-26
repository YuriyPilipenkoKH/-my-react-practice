const { useEffect } = require("react")
const { useSelector } = require("react-redux")
const { useNavigate } = require("react-router-dom")


export const UseLogOutRedirect = () => {
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state => state.user.isLoggedIn )
    
    useEffect(() => {
      if(!isLoggedIn) {
        navigate('/login', {replace: true})
      }
    }, [isLoggedIn, navigate])
}