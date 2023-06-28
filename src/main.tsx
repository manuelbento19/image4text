import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import { GlobalTheme } from './theme/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalTheme />
    <App />
  </React.StrictMode>,
)
