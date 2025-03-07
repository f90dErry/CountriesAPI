import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import Countries from './pages/Countries'
import Country from './pages/Country'
import { useState, useEffect } from 'react'

const App = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  )

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:countries' element={<Countries />} />
          <Route path='/country/:name' element={<Country />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
