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
    <div className='md:mx-24 mx-5'>
      <button
        className='flex items-center gap-2 p-2 px-8 my-4 shadow-sm '
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
                <div>
                  <img src={country.flags?.png} alt={country.name?.common} />
                  <h3 className='text-2xl font-bold md:font-extrabold my-5'>
                    {country.name?.common}
                  </h3>
                  <div className='flex flex-col my-10 gap-2'>
                    <h4>
                      <span className='font-medium'>Native Name: </span>
                      {country.name?.nativeName?.eng?.common}
                    </h4>
                    <h4>
                      <span className='font-medium'>Population: </span>
                      {country.population
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </h4>
                    <h4>
                      <span className='font-medium'>Region: </span>
                      {country.region}
                    </h4>
                    <h4>
                      <span className='font-medium'>Sub Region: </span>
                      {country.subregion}
                    </h4>
                    <h4>
                      <span className='font-medium'>Capital: </span>
                      {country.capital}
                    </h4>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <h4>
                      <span className='font-medium'>Top Level Domain: </span>
                      {country.tld}
                    </h4>
                    <h4>
                      <span className='font-medium'>Currencies: </span>
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
                      <span className='font-medium'>Languages: </span>
                      {Object.values(country.languages).join(', ')}
                    </h4>
                    <h4>
                      <span className='font-medium'>Border Countries: </span>
                      {country.borders ? country.borders.join(', ') : 'None'}
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
