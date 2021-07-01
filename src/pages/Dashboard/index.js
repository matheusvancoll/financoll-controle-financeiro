import React from 'react'
import './Dashboard.css'

export default function Dashboard() {
  return(
    <div className="dashboard__container">
      <navbar className="navbar">
        <p>Financoll</p>
        <div>
          <p>Entradas</p>
          <p>Saídas</p>
        </div>
        <p>Username</p>
      </navbar>

      <div className="card__container">
        <div className="card resume-saldo">
          <div className="saldo-info">
            <p>Após quitar todas as despesas, esse será o saldo de sua conta</p>
            <div className="saldo-saldo">
              <h5>Saldo</h5>
              <h4>R$ 400,00</h4>
            </div>
          </div>
          <div className="saldo-buttons">
            <a id="activeColor">Nova Receira</a>
            <a>Nova Despesa</a>
          </div>
        </div>
        <div className="card resume-investimento">
          <p>Se programe para o futuro!</p>
          <i class="fas fa-chart-line"></i>
          <a className="card-button">Investimentos</a>
        </div>
        <div className="card">
          <div className="card-mini">
            <p>Receita</p>
            <i class="fas fa-hand-holding-usd"></i>
            <h4>R$ 2400,00</h4>
          </div>
          <div className="card-mini">
            <p>Gastos</p>
            <i class="fas fa-shopping-cart"></i>
            <h4>R$ 2000,00</h4>
          </div>
          <div className="card-mini">
            <p>Investido</p>
            <i class="fas fa-chart-line"></i>
            <h4>R$ 5450,00</h4>
          </div>
            <div className="card-mini">
            <p>Status</p>
            <i class="far fa-smile"></i>
            <h4>Positivo</h4>
          </div>
        </div>
      </div>
      
    </div>
  )
}