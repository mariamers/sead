import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Relatorios from "./js/Pages/relatorios/Relatorios.jsx";
import Index from "./js/Pages/index/Index.jsx";
import App from './App.jsx';


const router = createBrowserRouter([
  {
    path: "/sead/",
    element: <App />,
    children: [
      {
        path: "/sead/relatorios",
        element: <Relatorios />,
      },

    ],
  },
]);
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
;