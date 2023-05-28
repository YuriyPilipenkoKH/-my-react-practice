import { useSelector } from "react-redux"

const User = () => {
const {isLoading, error, user} = useSelector(state => state.user)
// console.log(state);

  return (
    <div>
        {isLoading 
        ? <div>Loading...</div>
        : ''
    }

         <h3>{user.name}</h3>
    </div>
  )
}      

export default User