import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SignIn } from './pages/Sign'
import { Dash } from './pages/Dash'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/dashboard'>
          <Dash />
        </Route>
        <Route path='/'>
          <SignIn />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
