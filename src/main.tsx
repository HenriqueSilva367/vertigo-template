import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/LoginPage'
import Footer from './components/footer/footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginPage />
    <Footer/>
  </React.StrictMode>,
)
