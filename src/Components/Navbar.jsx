import { IoMoonOutline } from 'react-icons/io5'
import { MdOutlineLightMode } from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const toogleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <nav className='shadow-md flex justify-between items-center p-6 md:px-24'>
      <h2 className='font-bold font-nunito text-xl'>Where in the world?</h2>
      <button className='flex items-center gap-2' onClick={toogleDarkMode}>
        {darkMode ? <MdOutlineLightMode /> : <IoMoonOutline />}
      </button>
    </nav>
  )
}

export default Navbar
