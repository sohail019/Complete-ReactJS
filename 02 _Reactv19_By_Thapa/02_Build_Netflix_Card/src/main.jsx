import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Profile  from './components/Profile.jsx'
import { Practices } from './Practices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practices /> */}
    {/* <Profile /> */}
  </StrictMode>,
)
