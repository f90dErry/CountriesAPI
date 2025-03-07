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
    <div>
      <button
        className='flex items-center gap-2 p-2 px-8 my-4 shadow-md'
        onClick={() => window.history.back()}
      >
        <IoArrowBack />
        Back
      </button>

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {country.map((country, index) => (
            <div key={index}>
              {country.name?.common === params.name && (
                <div>
                  <img src={country.flags?.png} alt={country.name?.common} />
                  <h3>{country.name?.common}</h3>
                  <h4>
                    <span>Native Name:</span>
                    {country.name?.nativeName?.eng?.common}
                  </h4>
                  <h4>
                    <span>Population:</span>
                    {country.population}
                  </h4>
                  <h4>
                    <span>Region:</span>
                    {country.region}
                  </h4>
                  <h4>
                    <span>Sub Region:</span>
                    {country.subregion}
                  </h4>
                  <h4>
                    <span>Capital:</span>
                    {country.capital}
                  </h4>
                  <h4>
                    <span>Top Level Domain:</span>
                    {country.tld}
                  </h4>
                  <h4>
                    <span>Currencies:</span>
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
                    <span>Languages:</span>
                    {Object.values(country.languages).join(', ')}
                  </h4>
                  <h4>
                    <span>Border Countries:</span>
                    {country.borders ? country.borders.join(', ') : 'None'}
                  </h4>
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
