import React from 'react'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import About from './components/about/About.jsx'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials.jsx'
import Contact from './components/contact/contact'
import Services from './components/services/Services.jsx'
import Experience from './components/experience/experience.jsx'

const App = () => {
  return (
    <>

      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Portfolio></Portfolio>
      <Testimonials/>
      <Contact></Contact>
      <Footer></Footer>



      
    </>
  )
}

export default App