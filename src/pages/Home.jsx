import { GoSearch } from 'react-icons/go'
import { useState } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'
import Countries from './Countries'

const Home = () => {
  const [region, setRegion] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState('Filter by Region')
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  const onChange = (e) => {
    e.target.value
  }

  return (
    <div className=''>
      <form className='mx-5 my-8 md:mx-24'>
        <div className='md:flex md:justify-between md:items-center'>
          <div className='flex items-center gap-5 px-10 py-4 shadow-md md:w-1/3'>
            <GoSearch />
            <input
              type='search'
              placeholder='Search for a country...'
              onChange={onChange}
              className='cursur-pointer focus:outline-none'
            />
          </div>

          <div className='relative'>
            <button
              type='button'
              onClick={() => setRegion(!region)}
              className='flex items-center justify-between gap-10 p-4 my-4 shadow-md'
            >
              {selectedRegion}
              <IoChevronDownOutline />
            </button>

            {region && (
              <ul className='absolute rounded-lg shadow-md overflow-hidden w-[43%] md:w-full p-5'>
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
        </div>
      </form>

      <Countries />
    </div>
  )
}

export default Home
