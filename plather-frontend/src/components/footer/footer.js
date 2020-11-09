import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import Logo from '../../assets/logo.png'

function Footer() {
  return (
    <div className="footer-container">
      <div class="social-media-wrap">
        <div class="footer-logo">
          <Link to="/" className="social-logo">
            <img src={Logo} alt="Plathanus" />
            <i class="fab fa-typo3" />
          </Link>
        </div>
        <small class="website-rights">
          A web site made by a future Plather
        </small>
        <div class="social-icons">
          <Link
            class="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <a href="https://www.linkedin.com/in/diegoprestesgit/">
              <i class="fab fa-linkedin" />
            </a>
          </Link>
          <Link
            class="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f" />
          </Link>
          <Link
            class="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram" />
          </Link>
          <Link
            class="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i class="fab fa-youtube" />
          </Link>
          <Link
            class="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
