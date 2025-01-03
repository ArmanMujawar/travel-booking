import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Destination from './components/Destination'
import Booking from './components/Booking'
import Footer from './components/Footer'
import Carousel from './components/Carousel'

function App() {


  return (
    <>
      
        <Navbar/>
        <About/>
      <Destination/>
      <Carousel/>
      <Booking/>
      <Footer/>
     
    </>
  )
}

export default App
