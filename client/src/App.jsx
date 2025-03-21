import { useState } from 'react'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Register from './components/Register'
import Tutorial from './components/Tutorial'
import Drill from './components/Drill'
import Home1 from './components/Home1'

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/home",
      element:<><Navbar/><Drill/></>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/tutorial",
      element:<><Navbar/><Tutorial/></>
    },
    {
      path:"/input",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/input1",
      element:<><Navbar/><Home1/></>
    },
    // {
    //   path:"/input2",
    //   element:<><Navbar/><Home2/></>
    // },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
{/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}