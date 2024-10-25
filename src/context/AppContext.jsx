import { useState, useEffect } from 'react'
import { ApiContext } from './Context'

// eslint-disable-next-line react/prop-types
export default function AppContext({ children }) {
  const [info, setInfo] = useState({})
  const [search, setSearch] = useState('')
  const [coordinates, setCoordinates] = useState({
    lat: 40.4165,
    lng: -3.70256
  })

  useEffect(() => {
    fetchData()
  }, [])

  // Expresión regular para una dirección IPv4
  const ipv4Regex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

  // Expresión regular para un dominio
  const domainRegex =
    /^(?!https?:\/\/)(?!www\.)[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}$/

  const fetchData = async (search) => {
    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_Api_Key}`

    if (ipv4Regex.test(search)) {
      // Si es una IP, usar el parámetro `ipAddress`
      url += `&ipAddress=${search}`
    } else if (domainRegex.test(search)) {
      // Si es un dominio, usar el parámetro `domain`
      url += `&domain=${search}`
    }

    try {
      const response = await fetch(url)
      const data = await response.json()

      const {
        location: { lat, lng }
      } = data

      setInfo(data)
      setCoordinates({ ...coordinates, lat: lat, lng: lng })
      setSearch('')
    } catch (error) {
      console.error('Error al hacer la solicitud:', error)
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    fetchData(search)
  }

  return (
    <ApiContext.Provider
      value={{ handleChange, handleSubmit, info, search, coordinates }}
    >
      {children}
    </ApiContext.Provider>
  )
}
