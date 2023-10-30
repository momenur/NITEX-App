import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className="w-full h-auto bg-[#111111]">
      <div className="px-4 mx-auto text-white lg:px-16 max-w-screen-2xl">
        <Navbar />
        <Banner/>
      </div>
    </div>
  )
}

export default App
