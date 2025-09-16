// main.jsx (React 18 usuli)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Root elementni topamiz
const rootElement = document.getElementById('root')

// Root yaratamiz
const root = createRoot(rootElement)

// Render qilamiz
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)