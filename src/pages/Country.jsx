import { IoArrowBack } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Country = () => {
  const [loading, setLoading] = useState(true)
  const [country, setCountry] = useState([])

  const navigate = useNavigate()
  const params = useParams()

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
    <div className='md:mx-24 mx-10'>
      <button
        className='flex items-center gap-2 p-2 px-8 mt-8 shadow-lg dark:bg-gray-700 dark:text-white'
        onClick={() => window.history.back()}
      >
        <IoArrowBack />
        Back
      </button>

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className=''>
          {country.map((country, index) => (
            <div key={index}>
              {country.name?.common === params.name && (
                <div className='md:flex gap-32 mt-10 items-center justify-center'>
                  <img
                    src={country.flags?.png}
                    alt={country.name?.common}
                    className='my-10 w-full h-[300px] md:h-[400px] md:w-[600px] object-cover'
                  />
                  <div>
                    <h3 className='text-2xl my-5 font-bold md:text-3xl md:font-extrabold '>
                      {country.name?.common}
                    </h3>
                    <div className='md:flex gap-32'>
                      <div className='flex flex-col mb-8 gap-1'>
                        <h4>
                          <span className='font-bold'>Native Name: </span>
                          {country.name?.nativeName?.eng?.common}
                        </h4>
                        <h4>
                          <span className='font-bold'>Population: </span>
                          {country.population
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </h4>
                        <h4>
                          <span className='font-bold'>Region: </span>
                          {country.region}
                        </h4>
                        <h4>
                          <span className='font-bold'>Sub Region: </span>
                          {country.subregion}
                        </h4>
                        <h4>
                          <span className='font-bold'>Capital: </span>
                          {country.capital}
                        </h4>
                      </div>

                      <div className='flex flex-col gap-1'>
                        <h4>
                          <span className='font-bold'>Top Level Domain: </span>
                          {country.tld}
                        </h4>
                        <h4>
                          <span className='font-bold'>Currencies: </span>
                          {country.currencies
                            ? Object.values(country.currencies)
                                .map(
                                  (currency) =>
                                    `${currency.name} (${currency.symbol})`
                                )
                                .join(', ')
                            : 'None'}
                        </h4>
                        <h4>
                          <span className='font-bold'>Languages: </span>
                          {Object.values(country.languages).join(', ')}
                        </h4>
                      </div>
                    </div>

                    <h4 className='mt-5 flex flex-col md:flex-row md:gap-5 md:items-center'>
                      <span className='font-bold'>Border Countries:</span>
                      {country.borders?.length > 0 ? (
                        <div className='flex flex-wrap gap-2'>
                          {country.borders.map((border, index) => (
                            <button
                              key={index}
                              className='shadow-md px-5 md:px-10 py-1 rounded-md dark:bg-gray-700 dark:text-white'
                            >
                              {border}
                            </button>
                          ))}
                        </div>
                      ) : (
                        ' None'
                      )}
                    </h4>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Country
