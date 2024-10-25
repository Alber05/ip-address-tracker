import { useContext, useEffect, useRef } from 'react'
import { ApiContext } from '../context/Context'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Map() {
  const {
    coordinates: { lat, lng }
  } = useContext(ApiContext)

  const mapRef = useRef()

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([lat, lng], mapRef.current.getZoom()) // Actualiza la vista con las nuevas coordenadas
    }
  }, [lat, lng]) // Solo se ejecuta cuando lat o lng cambian

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
      className='relative z-0 w-full'
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[lat, lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
