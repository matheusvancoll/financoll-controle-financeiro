import React from 'react'
import './Login.css'

import { Link } from 'react-router-dom'

export default function Login() {
  return(
    <div className="login__container">
      <div className="login__title-app">
        <h1>Financoll</h1>
        <h3>Seu Gerenciador financeiro</h3>
      </div>

      <div className="login__input-area">
        <div className="input-data">
          <input type="text" placeholder="Insira seu usuário" />
          <input type="password" placeholder="Insira sua senha" />
          <button type="submit">
            <Link to="/dashboard">
              Acessar
            </Link>
          </button>
          <Link to="/forgotpassword">Redefinir senha</Link>
        </div>
      </div>

      <div className="login__register">
        <Link to="/register">Cadastre-se</Link>
      </div>

    </div>
  )
}