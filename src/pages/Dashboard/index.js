import React from 'react'
import { Link } from 'react-router-dom'

import './Dashboard.css'

import Navbar from './Components/Navbard'
import ResumeItemList from './Components/ListResumeDashboardIndex'

export default function Dashboard() {
  return(
    <div className="dashboard__container">
      <Navbar activeLinkInicio={true} />
      <div className="card__container">
        <div className="cards-responsive">
          <div className="card">
            <div className="card-info">
              <p>Após quitar todas as despesas, esse será o saldo de sua conta</p>
              <div className="info-saldo">
                <h5>Saldo</h5>
                <h4>R$ 400,00</h4>
              </div>
            </div>
            <div className="card-buttons saldo">
              <Link to="/dashboard/controle-receita" className="activeColor-1">Nova Receita</Link>
              <Link to="/dashboard/controle-despesas" className="activeColor-2">Nova Despesa</Link>
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
              <Link to="/dashboard/controle-investimentos" className="activeColor-3">Investimentos</Link>
            </div>
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

        <div className="cards-responsive">
          <div className="card">
            <h2>Despesas</h2>
            <div className="head-list-resume">
              <p>Descrição</p>
              <p>Valor</p>
              <p>Percentual</p>
            </div>
            <ResumeItemList Title="Aluguel" Value="800,00" Percent="30%"/>
            <ResumeItemList Title="Cartão de crédito" Value="1200,00" Percent="30%"/>
            <ResumeItemList Title="Netflix" Value="55,00" Percent="30%"/>
            <ResumeItemList Title="Spotify" Value="19,90" Percent="30%"/>
            <ResumeItemList Title="Viajem" Value="300,00" Percent="30%"/>
            <ResumeItemList Title="Restaurantes" Value="250,00" Percent="30%"/>
            <ResumeItemList Title="Parcela do carro" Value="635,00" Percent="30%"/>
            <ResumeItemList Title="Guardar dinheiro" Value="300,00" Percent="30%"/>
            <ResumeItemList Title="Investir" Value="300,00" Percent="30%"/>
            <ResumeItemList Title="Plano de saúde" Value="259,00" Percent="30%"/>
            <ResumeItemList Title="Escola das crianças" Value="689,00" Percent="30%"/>
          </div>

          <div className="card">
            <h2>Investimentos</h2>
            <div className="head-list-resume">
              <p>Descrição</p>
              <p>Valor</p>
              <p>Percentual</p>
            </div>
            <ResumeItemList Title="ITUB3" Value="800,00" Percent="30%"/>
            <ResumeItemList Title="Tesouro Direto" Value="800,00" Percent="30%"/>
            <ResumeItemList Title="MXRF11" Value="800,00" Percent="30%"/>
            <ResumeItemList Title="MGLU3" Value="800,00" Percent="30%"/>
            <ResumeItemList Title="CPLL3" Value="800,00" Percent="30%"/>
            <ResumeItemList Title="CDB 200%" Value="800,00" Percent="30%"/>
            <ResumeItemList Title="CDB 115%" Value="800,00" Percent="30%"/>
          </div>
        </div>
      </div>
    </div>
  )
}