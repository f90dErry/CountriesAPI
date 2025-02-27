import React, { useState, useEffect } from 'react'
import { IoArrowBack } from 'react-icons/io5'

const Country = () => {
  const [loading, setLoading] = useState(true)
  const [country, setCountry] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountry(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log('error fetchching data', error)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <button
        className='flex items-center gap-2 p-2 px-8 my-4 shadow-md'
        onClick={() => window.history.back()}
      >
        <IoArrowBack />
        Back
      </button>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {country.map((country, index) => (
            <div key={index} className=''>
              <img
                src={country.flags.png}
                alt={country.name.common}
                className='w-32 h-32 object-cover mb-2'
              />
              <h2>{country.name.common}</h2>
              <h3>{country.population}</h3>
              <h3>{country.region}</h3>
              <h3>{country.subregion}</h3>
              <h3>{country.capital}</h3>
              <h3>{country.tld}</h3>
              <h3>{country.curencies}</h3>
              <h3>{country.language}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Country
