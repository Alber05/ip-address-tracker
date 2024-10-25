import Form from './components/Form'
import Info from './components/Info'
import Map from './components/Map'

function App() {
  return (
    <>
      <div className='grid h-screen grid-rows-[30vh,70vh] md:grid-rows-[25vh,75vh]'>
        <div className='relative w-full bg-mobile-pattern bg-cover bg-no-repeat pt-4 lg:bg-desktop-pattern'>
          <h1 className='mx-auto text-center text-2xl font-semibold text-white'>
            Ip Addres Tracker
          </h1>
          <Form />
          <Info />
        </div>
        <Map />
      </div>
    </>
  )
}

export default App
