import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import Countries from './pages/Countries'
import Country from './pages/Country'

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:countries' element={<Countries />} />
          <Route path='/country/:name' element={<Country />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
