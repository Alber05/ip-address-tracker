import { useContext, useEffect, useRef } from 'react'
import { ApiContext } from '../context/Context'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Importa los archivos de los íconos
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Configura el icono predeterminado
const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
})

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
      <Marker position={[lat, lng]} icon={defaultIcon}>
        <Popup>Tu ubicación</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
