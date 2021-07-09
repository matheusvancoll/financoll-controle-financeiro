import React from 'react'
import './Login.css'

import { Link } from 'react-router-dom'

export default function Forgot(props) {
  return(
    <div className="login__container">
      <div className="login__title-app">
        <h1>Financoll</h1>
        <h3>Seu Gerenciador financeiro</h3>
      </div>
      <div className="login__acess">
        <div className="login__tabs">
          <Link id="tab-disable" onClick={()=> props.acessType("Login")}>Login</Link>
          <div id="tab-active">Redefinir Senha</div>
        </div>
        <div className="login__input">
          <div className="input-data" id="forgot-active">
            <p>Email</p>
            <input type="text" />
          </div>
          <div className="input-actions" >
            <Link onClick={()=> props.acessType("Login")} id="btnAcess">Redefinir</Link>
          </div>
        </div>
      </div>
    </div>
  )
}