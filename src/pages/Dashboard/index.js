import React, { useContext } from 'react'
import './Dashboard.css'

import { UserDataContext } from '../../ContextAPI'

export default function Dashboard() {

  const [UserInfo, setUserInfo] = useContext(UserDataContext)

  return(
    <div className="dashboard__container">
      <navbar className="navbar">
        <p>Financoll</p>
        <div>
          <p>Entradas</p>
          <p>Saídas</p>
        </div>
        <p>{UserInfo.user}</p>
      </navbar>

      <div className="card__container">
        <div className="card">
          <div className="card-info">
            <p>Após quitar todas as despesas, esse será o saldo de sua conta</p>
            <div className="info-saldo">
              <h5>Saldo</h5>
              <h4>R$ 400,00</h4>
            </div>
          </div>
          <div className="card-buttons saldo">
            <a href="#" className="activeColor-1">Nova Receira</a>
            <a href="#" className="activeColor-2">Nova Despesa</a>
          </div>
        </div>
        
        <div className="card activeColor-1">
          <div className="card-info">
            <p>Se programe para o futuro!
              <br></br>
              Faça seu dinheiro trabalhar para você</p>
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="card-buttons">
            <a href="#" className="activeColor-3">Investimentos</a>
          </div>
        </div>

        <div className="mini-resume-card">
          <div className="resume-card">
            
            <div className="card-mini">
              <div className="title-mini-card">
                <p>Receita</p>
                <i class="fas fa-hand-holding-usd"></i>
              </div>
              <div className="info-mini-card">
                <h4>R$ 2400,00</h4>
              </div>
            </div>
            
            <div className="card-mini">
              <div className="title-mini-card">
                <p>Gastos</p>
                <i class="fas fa-shopping-cart"></i>
              </div>
              <div className="info-mini-card">
                <h4>R$ 2000,00</h4>
              </div>
            </div>
            
            <div className="card-mini">
              <div className="title-mini-card">
                <p>Investido</p>
                <i class="fas fa-chart-line"></i>
              </div>
              <div className="info-mini-card">
                <h4>R$ 5450,00</h4>
              </div>
            </div>
            
            <div className="card-mini">
              <div className="title-mini-card">
                <p>Status</p>
                <i class="far fa-smile"></i>
              </div>
              <div className="info-mini-card">
                <h4>Positivo</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}