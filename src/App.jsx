import './App.css'
import About from './components/About'

import Booking from './components/Booking'
import Carousel from './components/Carousel'
import Destination from './components/Destination'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    
      <Navbar/>
      <About/>
      
      <Destination/>
     
      {/* <Gallery/> */}
      <Carousel/>
      <Booking/>
      <Footer/>

    </>
  )
}

export default App
