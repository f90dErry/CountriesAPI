import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Countries = () => {
  const [loading, setLoading] = useState(true)
  const [country, setCountry] = useState([])

  const params = useParams()
  const navigate = useNavigate()

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
  }, [navigate, params.Countries])

  return (
    <div className='md:mx-32 mx-3'>
      {/* loading state */}
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='grid grid-cols-1 justify-items-center gap-10 md:gap-12 md:grid md:grid-cols-4 mx-3'>
          {country.map((country, index) => (
            <div
              key={index}
              className='shadow-md h-[330px] w-2/3 md:w-full rounded-lg pb-8'
              onClick={() => navigate(`/country/${country.name.common}`)}
            >
              <img
                src={country.flags.png}
                alt={country.name.common}
                className='h-44 w-full object-cover rounded-t-lg'
              />
              <div className='p-5 text-xs flex flex-col gap-2'>
                <h2 className='text-xl font-bold'>{country.name.common}</h2>
                <h3>
                  <span className='font-medium'>Population: </span>

                  {country.population
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </h3>
                <h3>
                  <span className='font-medium'>Region: </span>
                  {country.region}
                </h3>
                <h3>
                  <span className='font-medium'>Capital: </span>
                  {country.capital}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Countries
