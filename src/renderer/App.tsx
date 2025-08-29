
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings'
import Reports from './pages/Reports'
import Help from './pages/Help'

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
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </main>

      <footer className="footer">
        <span>Ruta actual:</span> <code>{location.pathname}</code>
      </footer>
    </div>
  )
}
