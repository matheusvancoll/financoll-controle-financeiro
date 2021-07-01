import { React, useState} from 'react'
import './Login.css'

import { Link } from 'react-router-dom'

export default function Acess() {

  const [Acess, setAcess] = useState("Login")

  if(Acess == "Login") {
    return Login()
  }

  if(Acess == "Forgot") {
    return Forgot()
  }

  if(Acess == "Register") {
    return Register()
  } 

function Login() {
  return(
    <div className="login__container">
      <div className="login__title-app">
        <h1>Financoll</h1>
        <h3>Seu Gerenciador financeiro</h3>
      </div>
      <div className="login__acess">
        <div className="login__tabs">
          <div id="tab-active">Login</div>
          <Link onClick={()=> setAcess("Register")} id="tab-disable">Primeiro Acesso</Link>
        </div>
        <div className="login__input">
          <div className="input-data">
            <p>Email</p>
            <input type="text" />
            <p>Senha</p>
            <input type="password" />
          </div>
          <div className="input-actions">
            <Link onClick={()=> setAcess("Forgot")}>Esqueceu a senha?</Link>
            <Link to="/dashboard" id="btnAcess">Acessar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Forgot() {
  return(
    <div className="login__container">
      <div className="login__title-app">
        <h1>Financoll</h1>
        <h3>Seu Gerenciador financeiro</h3>
      </div>
      <div className="login__acess">
        <div className="login__tabs">
          <Link id="tab-disable" onClick={()=> setAcess("Login")}>Login</Link>
          <div id="tab-active">Redefinir Senha</div>
        </div>
        <div className="login__input">
          <div className="input-data" id="forgot-active">
            <p>Email</p>
            <input type="text" />
          </div>
          <div className="input-actions" >
            <Link onClick={()=> setAcess("Login")} id="btnAcess">Redefinir</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function Register() {
  return(
    <div className="login__container">
      <div className="login__title-app">
        <h1>Financoll</h1>
        <h3>Seu Gerenciador financeiro</h3>
      </div>
      <div className="login__acess">
        <div className="login__tabs">
          <Link id="tab-disable" onClick={()=> setAcess("Login")}>Login</Link>
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
            <Link onClick={()=> setAcess("Forgot")}>Esqueceu a senha?</Link>
            <Link to="/dashboard" id="btnAcess">Acessar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

}