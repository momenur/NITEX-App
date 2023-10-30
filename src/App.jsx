import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'

function App() {
  return (
    <div className="w-full h-auto bg-[#111111]">
      <div className="px-4 mx-auto text-white lg:px-16 max-w-screen-2xl">
        <Navbar />
        <Banner/>
        <About/>
        <Services/>
      </div>
    </div>
  )
}

export default App
