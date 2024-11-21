import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Marks from './Marks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Marks name='Rajan' roll='23' m1='78' m2='56' m3='65'/>
  </StrictMode>,
)

