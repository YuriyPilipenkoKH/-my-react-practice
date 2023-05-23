
import { Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'components/container/Container';
import ToTopButton from "components/ToTopButton/ToTopButton";
import Layout from 'components/Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';


 const App = () => {
  return (
    <Container>

      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route path='login' element = {<LoginPage/>}/>
          <Route path='*' element = {<Navigate to='/' replace />}/>
        </Route>
      </Routes>

   <ToTopButton/>
    </Container>
  )
}
export default App;

