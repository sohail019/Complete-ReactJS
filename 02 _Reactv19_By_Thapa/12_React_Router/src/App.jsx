import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import { AppLayout } from './components/layout/AppLayout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import {Home} from "./pages/Home"
import { Movies } from './pages/Movies'
import "./App.css"

export const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "movies",
          element: <Movies />,
        },
      ]
    }
  ]);

  // const router = createBrowserRouter(

  //   createRoutesFromElements(
  //     <>
  //       <Route path='/' element={<Home />}/>
  //       <Route path='about' element={<About />}/>
  //       <Route path='contact' element={<Contact />}/>
  //       <Route path='movies' element={<Movies />}/>
  //     </>
  //   )
  // )

  return <RouterProvider router={router} />
  
}
