import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Reset } from './styles/reset.js'
import { Global } from './styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <Global />
    <App />
  </React.StrictMode>,
)
