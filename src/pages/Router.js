import React from 'react'
import {  BrowserRouter, Switch, Route } from 'react-router-dom'
import { UserDataProvider } from '../ContextAPI'

import Login from './Login'
import Dashboard from './Dashboard'

export default function Router() {
  return(
    <UserDataProvider>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Login />
          </Route>
          
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

        </Switch>
      </BrowserRouter>
    </UserDataProvider>
  )
}