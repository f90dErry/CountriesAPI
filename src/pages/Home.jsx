import { GoSearch } from 'react-icons/go'
import { useState } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'
import Countries from './Countries'

const Home = () => {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState('')
  const regions = [
    'Filter by Region',
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
  ]

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className=''>
      <form onClick={() => setRegion(!region)} className='mx-5 md:mx-24'>
        <div className='md:flex md:justify-between md:items-center my-7 md:my-10'>
          <div className='flex items-center rounded-lg gap-5 px-10 py-4 shadow-md md:w-1/3'>
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
              className='flex items-center justify-between rounded-lg gap-10 p-4 my-6 md:my-0 shadow-md'
              onClick={() => setRegion(!region)}
            >
              {selectedRegion || 'Filter by Region'}
              <IoChevronDownOutline />
            </button>

            {region && (
              <ul className='absolute rounded-lg shadow-md overflow-hidden w-[43%] md:w-full p-5 bg-white'>
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

      <Countries search={search} selectedRegion={selectedRegion} />
    </div>
  )
}

export default Home
