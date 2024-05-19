import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './pages/Error/Error.jsx';
import Courses from './pages/Courses/Courses.jsx';
import Mendia from './pages/Mendia/Mendia.jsx';
import Vakansia from './pages/Vakansia/Vakansia.jsx';
import FeadBack from './pages/FedBack/FeadBack.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cours",
    element: <Courses />
  },
  {
    path: "/media",
    element: <Mendia />
  },
  {
    path: "/vakansia",
    element: <Vakansia />
  },
  {
    path: "/feadback",
    element: <FeadBack />
  },
  {
    path: "*",
    element: <Error />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
)
