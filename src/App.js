import './styles/styles.scss'
import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import routeConfig from './routes/routes'
import history from './components/shared/history'
import ApplicationLayout from './components/ApplicationLayout/ApplicationLayout'
class App extends Component {
  render() {
    const routeComponents = routeConfig.routes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />)
    //const authenticatedRouteComponents = authenticatedRouteConfig.routes.map(({ path, component }, key) => <AuthenticatedRouter exact path={path} component={component} key={key.id} />)
    return (
        <Router history={history}> 
          <Switch> 
            <ApplicationLayout>
              {/* {authenticatedRouteComponents} */}
              {routeComponents}
            </ApplicationLayout>  
          </Switch>
        </Router>
    )
  }
}

export default App