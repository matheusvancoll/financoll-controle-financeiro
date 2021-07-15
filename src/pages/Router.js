import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './Login'
import DashboardPage from './Dashboard'
import AdminReceitasPage from './Dashboard/Receitas'
import AdminDespesasPage from './Dashboard/Despesas'
import AdminInvestimentosPage from './Dashboard/Investimentos'

export default function Router() {
  return(
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/dashboard/controle-receita" component={AdminReceitasPage} />
      <Route exact path="/dashboard/controle-despesas" component={AdminDespesasPage} />
      <Route exact path="/dashboard/controle-investimentos" component={AdminInvestimentosPage} />
    </Switch>
  )
}