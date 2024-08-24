import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { ContactForm } from './components/ContactForm.jsx'
import { Home } from './components/Home.jsx'
import { LoginForm } from './components/LoginForm.jsx'
import { RealLifeRegistration } from './components/RealLifeRegistration.jsx'
import { RegistrationForm } from './components/RegistrationForm.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "register",
        element: <RegistrationForm />
      },
      {
        path: "register-real",
        element: <RealLifeRegistration />
      },
      {
        path: "login",
        element: <LoginForm />
      },
      {
        path: "contact",
        element: <ContactForm />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
