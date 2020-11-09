import React from 'react'
import '../../App.css'
import Cards from '../cards/cards'
import HeroSection from '../hero-section/hero-section'
import Footer from '../footer/footer'

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  )
}

export default Home
