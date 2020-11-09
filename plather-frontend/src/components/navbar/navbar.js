import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/button'
import './navbar.css'
import Logo from '../../assets/logo.png'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/WhatWeDo"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                What we do?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Testimonial"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ContactUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact us
              </Link>
            </li>
          </ul>

          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        {button && <Button buttonStyle="btn--outline">SEARCHBAR</Button>}
      </nav>
    </>
  )
}

export default Navbar
