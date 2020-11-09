import React from 'react'
import CardItem from '../card-item/card-item'
import './cards.css'

import ImageOne from '../../assets/first-card.png'
import ImageTwo from '../../assets/second-card.png'
import ImageThree from '../../assets/thirdy-card.png'

function Cards() {
  return (
    <div className="cards">
      <div className="text__container">
        <h1>WHAT WE DO</h1>
        <div id="separator"></div>
        <div className="tricky__font">
          <p id="open__sans__p">Lorem ipsum dolor sit amet.</p>
          <p id="tricky__p">Proin gravida nibh vel velit auctor aliquet</p>
        </div>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={ImageOne}
              text="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,"
              path="/WhatWeDo"
            />
            <CardItem
              src={ImageTwo}
              text="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,"
              path="/Testimonial"
            />
            <CardItem
              src={ImageThree}
              text="This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,"
              path="/ContactUs"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
