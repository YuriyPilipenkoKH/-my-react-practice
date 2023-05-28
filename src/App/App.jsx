

import { Container } from 'components/container/Container';
import CarItem from 'components/CarItem/CarItem';


 const App = () => {
  return (
    <Container>
        <CarItem
        car ={{
          id: 1,
          name: 'Mers',
        }}
        />
        <CarItem
        car ={{
          id: 2,
          name: 'Lex',
        }}
        />
        <CarItem
        car ={{
          id: 3,
          name: 'Jeep',
        }}
        />
    </Container>
  )
}
export default App;

