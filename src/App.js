import './App.css'

import { BrowserRouter } from 'react-router-dom'

import Router from './pages/Router'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}
