import Home from "./Home";
import Products from "./Products";
import Header from "./Header";
import SignIn from "./SignIn";
import Register from "./Register";
import { Route, Switch } from 'react-router-dom'

function App() {
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products/:id' component={Products}/>
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/register' component={Register} />
        </Switch>
      </div>
    )
 }

 export default App