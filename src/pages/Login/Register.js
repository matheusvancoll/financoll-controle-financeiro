import React from 'react'
import './Login.css'

import { Link } from 'react-router-dom'

export default function Register(props) {
  return(
    <div className="login__container">
      <div className="login__title-app">
        <h1>Financoll</h1>
        <h3>Seu Gerenciador financeiro</h3>
      </div>
      <div className="login__acess">
        <div className="login__tabs">
          <Link id="tab-disable" onClick={()=> props.acessType("Login")}>Login</Link>
          <Link id="tab-active">Primeiro Acesso</Link>
        </div>
        <div className="login__input register">
          <div className="input-data">
            <p>Nome Completo</p>
            <input type="text" />
            <p>Email</p>
            <input type="text" />
            <p>Senha</p>
            <input type="text" />
            <p>Confirmação de senha</p>
            <input type="password" />
          </div>
          <div className="input-actions">
            <Link onClick={()=> props.acessType("Forgot")}>Esqueceu a senha?</Link>
            <Link onClick={()=> props.acessType("Login")}id="btnAcess">Cadastrar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}