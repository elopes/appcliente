import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './routes/Home.jsx'
import User from './routes/User.jsx'
import Transfere from './routes/Transfere.jsx'
import Board from './routes/Board.jsx'
import Lojista from './routes/Lojista.jsx'


import {createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router=createBrowserRouter([
  {
element: <App />,
children:[
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/user",
    element: <User />,
  },
  {
    path:"/transfere",
    element: <Transfere />,
  },
  {
    path:"/board",
    element: <Board />,
  },
  {
    path:"/lojista",
    element: <Lojista />,
  },
]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
