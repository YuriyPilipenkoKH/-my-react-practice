import { useDispatch } from "react-redux"
import { logIn } from "redux/userSlice"
import { useNavigate } from "react-router-dom"

export const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

  const  handleSubmit =(e)=>{
    e.preventDefault()
    const form  = e.currentTarget
    // console.log('first', form.elements.login.value)
    dispatch(logIn(form.elements.login.value))
    form.reset()
    navigate('/dashboard', {replace: true})
  }

return (
    <form onSubmit={handleSubmit}>
    <input autoComplete='off' type="text" name = 'login'/>
    <br />
    <button type='submit'>Log IN</button>
  </form>
)
}