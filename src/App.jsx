import React from 'react'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Fruits from './components/Fruits/Fruits'
import Dairy from './components/Dairy/Dairy'
import SeaFood from './components/SeaFood/SeaFood'
import AllProducts from './components/AllProducts/AllProducts'
import Layout from './components/Layout/Layout'
import CartPage from './components/CartPage/CartPage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'


function App() {
  
  const router = createBrowserRouter([
    {
     path:'/',
     element:<Layout/>,
     children: [
      {
        path:'/',
        element: <Home/>
      }
      ,{
    path:'/fruits',
    element: <Fruits/>
  },
  {
    path:'/dairy',
    element:<Dairy/>
  },
  {
    path:'/seafood',
    element:<SeaFood/>
  },
  {
    path:'/allproducts',
    element:<AllProducts/>
  },
  {
    path:'/cartpage',
    element:<CartPage/>
   }
  ,{
    path: '/login', 
    element: <Login />
  },
  {path: '/register',
     element: <Register />
    }
    ],
  },
])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
 