import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const basename =
  import.meta.env.VITE_DEPLOY_ENV === "gh-pages" ? "/My-Portfolio-SanSopheak-" : "/";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App basename={basename} />
  </StrictMode>,
)
