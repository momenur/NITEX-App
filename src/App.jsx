import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Instructors from './components/Instructors/Instructors'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Testimonial from './components/Testimonial/Testimonial'

function App() {
  
  return (
    <div className="w-full h-auto bg-[#111111]">
      <div className="px-4 mx-auto text-white lg:px-16 max-w-screen-2xl">
        <Navbar />
        <Banner />
        <About />
        <Services />
        <Gallery />
        <Instructors />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
