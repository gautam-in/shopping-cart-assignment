import { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/home';
import Products from './Pages/Products/Products';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

const MAIN_WRAPPER = styled.div`
  display: grid;
`

function App() {
  return (
    <MAIN_WRAPPER>
      <Header/>
      <Suspense fallback='Loading...!'>
        <Switch>
          <Route path='/products' component={Products} />
          <Route path='/home' component={Home} />
          <Route path='/signin' component={SignIn} />
          <Route path='/register' component={SignUp} />
        </Switch>
      </Suspense>
      <Footer></Footer>
    </MAIN_WRAPPER>
  );
}

export default App;
