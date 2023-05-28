import { Container } from 'components/container/Container';
import CarItem from 'components/CarItem/CarItem';
import {BsFillBagHeartFill} from 'react-icons/bs'
import useFavorites from 'hooks/useFavorites';
import User from 'components/User/User';

 const App = () => {

  const {favorites} = useFavorites()
  return (
    <Container>
      <div style={{display:'flex', gap:'10px'}}> 
        <BsFillBagHeartFill/>
        <span style={{fontWeight: '600' , padding: '4px 8px' , backgroundColor: '#219652', width:'26px'}}>{favorites.length}</span>
      </div>

      <User></User>
      
        <CarItem
        car ={{
          id: 1,
          name: 'ML-270',
        }}
        />
        <CarItem
        car ={{
          id: 2,
          name: 'Camry VX40', 
        }}
        />
        <CarItem
        car ={{
          id: 3,
          name: 'Compass',
        }}
        />
    </Container>
  )
}
export default App;

