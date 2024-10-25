import { useContext } from 'react'
import { ApiContext } from '../context/Context'

export default function Form() {
  const { handleChange, handleSubmit, search } = useContext(ApiContext)

  return (
    <form
      className='mx-auto mt-4 w-[80%] max-w-md overflow-hidden rounded-xl shadow-md'
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type='text'
        className='w-[85%] px-4 py-2 text-gray-700 outline-none'
        placeholder='Buscar cual dirección Ip o dominio'
        onChange={(e) => handleChange(e)}
        value={search}
      />
      <input
        type='submit'
        value='>'
        className='w-[15%] cursor-pointer bg-black p-2 font-bold text-white'
      />
    </form>
  )
}
