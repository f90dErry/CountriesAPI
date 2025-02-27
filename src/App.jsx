import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:country' element={<Country />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
