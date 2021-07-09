import React from 'react'
import './Login.css'

import { Link } from 'react-router-dom'

export default function Login(props) {
  return(
    <div className="login__container">
      <div className="login__title-app">
        <h1>Financoll</h1>
        <h3>Seu Gerenciador financeiro</h3>
      </div>
      <div className="login__acess">
        <div className="login__tabs">
          <div id="tab-active">Login</div>
          <Link onClick={()=> props.acessType("Register")} id="tab-disable">Primeiro Acesso</Link>
        </div>
        <div className="login__input">
          <div className="input-data">
            <p>Email</p>
            <input type="text" />
            <p>Senha</p>
            <input type="password" />
          </div>
          <div className="input-actions">
            <Link onClick={()=> props.acessType("Forgot")}>Esqueceu a senha?</Link>
            <Link to="/dashboard" id="btnAcess">Acessar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}