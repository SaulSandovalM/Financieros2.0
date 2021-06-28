import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// redux
// import { Provider } from 'react-redux'
// importaciones
import Login from './components/comun/login/Login'
import TutorialsList from './components/Tutorial-list'

function Routes () {
  return (
    <Router>
      <Switch>
        <Redirect exact from='/' to='/Login' />
        <Route exact path='/Login' component={Login} />
        <Route exact path={['/', '/tutorials']} component={TutorialsList} />
      </Switch>
    </Router>
  )
}

export default Routes
