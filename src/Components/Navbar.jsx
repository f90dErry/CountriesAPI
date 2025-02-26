import { IoMoonOutline } from 'react-icons/io5'

const Navbar = () => {
  return (
    <nav className='shadow-md flex justify-between items-center p-8'>
      <h2 className='font-bold font-nunito text-xl'>Where in the world?</h2>
      <button className='flex items-center gap-2'>
        <IoMoonOutline />
        Dark Mode
      </button>
    </nav>
  )
}

export default Navbar
