import React from 'react'
import '../../App.css'
import Button from '../button/button'
import './hero-section.css'
import Background from '../../assets/bg.jpg'

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={Background} alt="background" />
      <h1>Art is Eternal Happiness</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          WORK WITH US
        </Button>
      </div>
      <div className="scrolldown">scroll down</div>
    </div>
  )
}

export default HeroSection
