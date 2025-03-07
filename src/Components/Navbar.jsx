import { IoMoonOutline } from 'react-icons/io5'
import { MdOutlineLightMode } from 'react-icons/md'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className='shadow-md flex justify-between items-center p-6 md:px-24 dark:bg-gray-700 dark:text-white'>
      <h2 className='font-bold font-nunito text-xl'>Where in the world?</h2>
      <button className='flex items-center gap-2' onClick={toggleDarkMode}>
        {darkMode ? <MdOutlineLightMode /> : <IoMoonOutline />}
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  )
}

export default Navbar
