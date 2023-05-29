import { useActions } from "hooks/useActions"
import { useSelector } from "react-redux"



const User = () => {
const {isLoading, error, user} = useSelector(state => state.user)
// console.log(state);
// const actions = useActions()
// console.log(actions);

const {getUserById} = useActions()
console.log(getUserById);

  return (
    <div>
        <button 
        onClick={() => getUserById(1)} 
        >Get user</button>
        {isLoading 
          ? <div>Loading...</div>
          : error 
             ? <div>{error.message}</div>
             :  user?.name
               ?  <h3>{user.name}</h3>
               :   <h3>User not found</h3>
        }
    </div>
  )
}      

export default User