import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import {Home} from "./pages/Home"
import { Movies } from './pages/Movies'

export const App = () => {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "about",
  //     element: <About />
  //   },

  // ])

  const router = createBrowserRouter(

    createRoutesFromElements(
      <>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='movies' element={<Movies />}/>
      </>
    )
  )

  return <RouterProvider router={router} />
  
}
