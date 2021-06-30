import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Forgot from './Forgot'

export default function Router() {
  return(
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      
      <Route exact path="/register">
        <Register />
      </Route>

      <Route exact path="/dashboard">
        <Dashboard />
      </Route>

      <Route exact path="/forgotpassword">
        <Forgot />
      </Route>

    </Switch>
  )
}