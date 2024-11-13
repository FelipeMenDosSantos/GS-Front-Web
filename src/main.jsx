import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './routes/Home.jsx'
import { Error } from './routes/Error.jsx'
import { Login } from './routes/Login.jsx'
import { Cadastrar } from './routes/Cadastrar.jsx'
import { Solucao } from './routes/Solucao.jsx'
import { Sobre } from './routes/Sobre.jsx'

const router = createBrowserRouter([{
  path: "/", element: <App/>,
  errorElement: <Error/>,

  children:[
    {path: "/", element: <Home/>},
    {path: "/Login", element: <Login/>},
    {path: "/Cadastrar", element: <Cadastrar/>},
    {path: "/Solução", element: <Solucao/>},
    {path: "/Sobre", element: <Sobre/>},
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
