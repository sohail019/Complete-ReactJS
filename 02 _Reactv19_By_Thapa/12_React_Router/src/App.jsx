import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { About } from './pages/About'
import { Home } from './pages/Home'

export const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "about",
      element: <About />
    },

  ])

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}
