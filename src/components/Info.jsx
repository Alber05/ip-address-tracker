import { useContext } from 'react'
import { ApiContext } from '../context/Context'

export default function Info() {
  const { info } = useContext(ApiContext)

  // Verifica que la información esté disponible antes de desestructurar
  const {
    ip = 'Cargando',
    location: {
      city = 'Cargando',
      region = '',
      postalCode = '',
      timezone = 'Cargando'
    } = {},
    isp = 'Cargando'
  } = info

  return (
    <div className='absolute bottom-0 z-30 flex h-max w-[80%] translate-x-[calc(50vw-50%)] translate-y-[50%] flex-col items-center justify-center gap-2 rounded-xl bg-white px-2 py-2 text-center shadow-md md:min-h-[175px] md:flex-row md:gap-0'>
      <div className='md:w-1/4 md:border-r'>
        <h2 className='text-xs font-semibold text-gray-500 md:text-sm'>
          DIRECCION IP
        </h2>
        <p className='lg:text-xl'>{ip}</p>
      </div>
      <div className='md:w-1/4 md:border-r'>
        <h2 className='text-xs font-semibold text-gray-500 md:text-sm'>
          LOCALIZACION
        </h2>
        <p className='lg:text-xl'>
          {city}, {region} {postalCode}
        </p>
      </div>
      <div className='md:w-1/4 md:border-r'>
        <h2 className='text-xs font-semibold text-gray-500 md:text-sm'>
          ZONA HORARIA
        </h2>
        <p className='lg:text-xl'>{timezone}</p>
      </div>
      <div className='md:w-1/4'>
        <h2 className='text-xs font-semibold text-gray-500 md:text-sm'>ISP</h2>
        <p className='lg:text-xl'>{!isp ? 'No disponible' : isp}</p>
      </div>
    </div>
  )
}
