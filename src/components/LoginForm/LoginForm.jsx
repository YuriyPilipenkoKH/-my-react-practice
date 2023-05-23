import { useDispatch } from "react-redux"
import { logIn, logOut } from "redux/userSlice"

export const LoginForm = () => {
    const dispatch = useDispatch()

  const  handleSubmit =(e)=>{
    e.preventDefault()
    const form  = e.currentTarget
    // console.log('first', form.elements.login.value)
    dispatch(logIn(form.elements.login.value))
    form.reset()
  }

return (
    <form onSubmit={handleSubmit}>
    <input autoComplete='off' type="text" name = 'login'/>
    <br />
    <button type='submit'>Log IN</button>
  </form>
)
}