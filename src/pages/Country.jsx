import React, { useState, useEffect } from 'react'

const Country = () => {
  const [loading, setLoading] = useState(true)
  const [country, setCountry] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountry(data)
        setLoading(false)
        console.log(data)
      })
      .catch((error) => {
        console.log('error fetchching data', error)
        setLoading(false)
      })
  }, [])

  return <div></div>
}

export default Country
