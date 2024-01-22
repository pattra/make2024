import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Zine from './Zine.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/zine/",
    element: <Zine />,
  },
  {
    path: "/zine/:id",
    element: <Zine />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
