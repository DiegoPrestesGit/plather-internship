import React from 'react'
import CardItem from '../card-item/card-item'
import './cards.css'

import ImageOne from '../../assets/first-card.png'
import ImageTwo from '../../assets/second-card.png'
import ImageThree from '../../assets/thirdy-card.png'

import Button from '../button/button'

function Cards() {
  return (
    <div className="cards">
      <div className="text__container">
        <h1>WHAT WE DO</h1>
        <div id="divisor"></div>
        <div className="tricky__font">
          <p>she's a silver lining, </p>
          <p id="tricky__p">lone ranger riding through an open space</p>
        </div>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={ImageOne}
              text="My days end best when this sunset gets itself
              Behind that little lady sitting on the passenger side
              It's much less picturesque without her catching the light
              The horizon tries but it's just not as kind on the eyes
              "
              path="/WhatWeDo"
            />
            <CardItem
              src={ImageTwo}
              text="When the zeros line up on the 24 hour clock
              When you know who's calling even though the number is blocked
              When you walked around your house wearing my sky blue Lacoste
              And your knee socks
              "
              path="/Testimonial"
            />
            <CardItem
              src={ImageThree}
              text="Have you got color in your cheeks?
              Do you ever get that fear that you can't shift the type
              That sticks around like summat in your teeth?
              Are there some aces up your sleeve?
              Have you no idea that you're in deep?
              I've dreamt about you nearly every night this week
              "
              path="/ContactUs"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
