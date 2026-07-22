import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import './App.css'
import Booking from './components/Booking'
import WhyChooseUs from './components/WhyChooseUs'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <WhyChooseUs />
    <Portfolio /> 
    <Booking />
    <ScrollToTop />
    <Footer />
    </>
  )
}

export default App
