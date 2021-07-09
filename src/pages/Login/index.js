import { React, useState} from 'react'
import './Login.css'

import Login from './Login'
import Forgot from './Forgot'
import Register from './Register'

export default function Acess() {

  const [Acess, setAcess] = useState("Login")


  if(Acess === "Login") {
    return <Login acessType={setAcess} />
  }

  if(Acess === "Forgot") {
    return <Forgot acessType={setAcess} />
  }

  if(Acess === "Register") {
    return <Register acessType={setAcess}/>
  }
}