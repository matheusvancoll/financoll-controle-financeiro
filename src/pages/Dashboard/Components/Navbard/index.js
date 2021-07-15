import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

export default function Navbar(props) {

  return(
    <nav className="navbar__container">
      <ul className="navbar">
        <li><Link to="/dashboard" className={props.activeLinkInicio ? "active" : ""}>Início</Link></li>
        <li><Link to="/dashboard/controle-receita" className={props.activeLinkReceitas ? "active" : ""}>Receita</Link></li>
        <li><Link to="/dashboard/controle-despesas" className={props.activeLinkDespesas ? "active" : ""}>Despesas</Link></li>
        <li><Link to="/dashboard/controle-investimentos" className={props.activeLinkInvestimentos ? "active" : ""}>Investimentos</Link></li>
      </ul>
      <div className="user-config">
        <p>Matheus Vancoll</p>
        <Link to="/">Sair</Link>
      </div>
    </nav>
  )
}