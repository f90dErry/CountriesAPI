import Navbar from '../Components/Navbar'
import { GoSearch } from 'react-icons/go'
import { useState } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'

const Home = () => {
  const [region, setRegion] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState('Filter by Region')
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  return (
    <div>
      <Navbar />

      <form className='mx-5 my-8'>
        <div className='flex items-center gap-5 px-14 py-4 shadow-md'>
          <GoSearch />
          <input type='text' placeholder='Search for a country...' />
        </div>

        <div className='relative'>
          <button
            onClick={() => setRegion(!region)}
            className='flex items-center justify-between gap-10 p-4 my-4 shadow-md'
          >
            {selectedRegion}
            <IoChevronDownOutline />
          </button>

          {region && (
            <ul className='absolute rounded-lg shadow-md'>
              {regions.map((region, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedRegion(region)
                    setRegion(false)
                  }}
                >
                  {region}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
    </div>
  )
}

export default Home
