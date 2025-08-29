import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AppLinks from './components/AppLinks'
import AppRoutes from './components/AppRoutes'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

const PAGES = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/dashboard", element: <Dashboard />, title: "Dashboard" },
]

export default function App() {
  const location = useLocation()
  const [appName, setAppName] = useState<string>('')

  useEffect(() => {
    // Example call to preload API
    window.api?.getAppName?.().then(setAppName).catch(() => {})
  }, [])

  return (
    <div className="app">
      <nav className="nav">
        <div className="brand">{appName || 'Electron + React + TS'}</div>
        <AppLinks links={PAGES} />
      </nav>

      <main className="content">
        <AppRoutes routes={PAGES} />
      </main>

      <footer className="footer">
        <span>Ruta actual:</span> <code>{location.pathname}</code>
      </footer>
    </div>
  )
}
