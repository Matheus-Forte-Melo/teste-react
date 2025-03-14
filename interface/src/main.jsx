import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import LogIn from './components/Login'
import Header from './components/Header'
import Aside from './components/Aside'
import Cadastro from './components/Cadastro'
import Lista from './components/Lista'
import ListaPlanilhas from './components/Planilhas'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CadastroPage from './pages/CadastroPage'
import ListarPage from './pages/ListarPage'
import LoginPage from './pages/LoginPage'
import PlanilhasPage from './pages/PlanilhasPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/cadastro",
    element: <CadastroPage />
  },
  {
    path: "/listar",
    element: <ListarPage />
  },
  {
    path: "/planilhas",
    element: <PlanilhasPage />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
