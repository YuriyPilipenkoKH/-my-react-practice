import { useDispatch, useSelector } from 'react-redux';
import { ADD_CASH, GET_CASH } from 'redux/cashSlice';



const AccountBar = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => { 
      console.log(state);
     return state.account.cash
    })
    console.log(cash);
  
    const addCash =(cash) => {
      dispatch(ADD_CASH(cash))
    }
  
    const getCash =(cash) => {
      dispatch(GET_CASH(cash))
    }
    
  return (
    <div style={{display: 'flex', gap: '20px '}}>
    <div style={{fontSize: '2em', fontWeight: '600'}}> {cash}</div>
    <button onClick={() => addCash(Number(prompt()))}>Add Cash</button>
    <button onClick={() => getCash(Number(prompt()))}>Get Cash</button>
  </div>
  )
}

export default AccountBar
