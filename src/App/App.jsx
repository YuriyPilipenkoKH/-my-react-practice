import AccountBar from 'components/AccountBar/AccountBar';
import CustomerBar from 'components/CustomerBar/CustomerBar';
import { Container } from 'components/container/Container';


 const App = () => {

  return (
    <Container>
      <AccountBar/>
      <CustomerBar />
    </Container>
  )
}
export default App;

