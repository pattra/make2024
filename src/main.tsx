import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Zine from './Zine.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import NotFound from './NotFound.tsx';

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
  },
  {
    path: "*",
    element: <NotFound />,
  }
], { basename: '/make2024' });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
