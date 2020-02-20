import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dash from './pages/Dash'
import { SignIn } from './pages/Sign'

function App() {
  return (
    <div className='App'>
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
    </div>
  )
}

export default App
