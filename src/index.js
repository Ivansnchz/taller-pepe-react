import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import Home from "./pages/Home/Home";
import Servicios from "./pages/Servicios/Servicios";
import Recomendamos from "./pages/Recomendamos/Recomendamos";
import Contacto from "./pages/Contacto/Contacto";
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/recomendamos",
    element: <Recomendamos />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
