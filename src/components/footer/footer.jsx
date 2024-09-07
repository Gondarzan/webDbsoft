import React from 'react'
import './footer.css'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="line-footer"></div>
      <div className="footer-container">
        <p>© 2077 Untitled UI. All rights reserved.</p>
        <ul>
          <Link to='home' spy={true} smooth={true} offset={50} duration={500} className='footer-link' id='inicioLink'>Inicio</Link>
          <Link to='aboutUs' spy={true} smooth={true} offset={50} duration={500} className='footer-link' id='nosotrosLink'>Nosotros</Link>
          <Link to='service' spy={true} smooth={true} offset={50} duration={500} className='footer-link' id='servicioLink'>Servicios</Link>
          <Link to='contact' spy={true} smooth={true} offset={50} duration={500} className='footer-link'id='contactoLink'>Contacto</Link>
        </ul>
      </div>
    </div>
  )
}

export default Footer