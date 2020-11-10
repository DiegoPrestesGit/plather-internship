import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

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
        <div className="input-box">
          <input type="text" className="searchbar" placeholder="Search..." />
        </div>
      </nav>
    </>
  )
}

export default Navbar
