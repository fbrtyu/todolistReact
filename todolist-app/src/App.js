import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './components/mainPage'
import UserDeletePage from './components/userDeletePage'
import NotFoundPage from './components/notFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/delete',
    element: <UserDeletePage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}
export default App
