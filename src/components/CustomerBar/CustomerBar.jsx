import { useDispatch, useSelector } from 'react-redux';
import { ADD_CUSTOMER, REMOVE_CUSTOMER } from 'redux/customerSlice';

const CustomerBar = () => {
    const dispatch = useDispatch()

    const addCustomer =(name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(ADD_CUSTOMER(customer))
    }
    const rewmoveCustomer =(customer) => {
        dispatch(REMOVE_CUSTOMER(customer.id))
    }

    const customers = useSelector(state => state.customers.customers )
    console.log(customers);
  return (
    <>
 <div style={{display: 'flex', gap: '20px '}}>
   
    <button onClick={() => addCustomer(prompt())}>Add customer</button>
    
    </div>
    {customers.length > 0  
    ?
    <div>
      {customers.map(customer => 
        <div 
        onClick={() => rewmoveCustomer(customer)}
        key={customer.id}
        style={{fontSize: '1.5em', border: '1px solid #222' , padding: '8px'}}
        >{customer.name}</div>
        )}
    </div>
    :
    <div style={{fontSize: '2em', fontWeight: '600'}}>No clients
      
    </div>
}
    </>
  )
}

export default CustomerBar
