import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import AddTutorial from './components/Add-tutorial'
import TutorialsList from './components/Tutorial-list'
import Tutorial from './components/Tutorial'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <a href='/'>
            Prueba
          </a>
          <div>
            <li>
              <Link to='/tutorials'>
                Tutoriales
              </Link>
            </li>
            <li>
              <Link to='/add'>
                add
              </Link>
            </li>
          </div>
          <div>
            <Switch>
              <Route exact path={['/', '/tutorials']} component={TutorialsList} />
              <Route exact path='/add' component={AddTutorial} />
              <Route path='/tutorials/:id' component={Tutorial} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
