import React from 'react'
import './navbar.css'
import logoLigth from '../../assets/icon-navbar-logo.webp'
import logoDark from '../../assets/iconNegative-navbar-logo.webp'
import ligthIcon from '../../assets/lightIcon-navbar-toggle.webp'
import darkIcon from '../../assets/darkIcon-navbar-toggle.webp'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import {Link} from 'react-scroll'




const Navbar = ({ theme, setTheme }) => {

  const [menuMobile, setMenuMobile] = useState(false);

  const CambioMenuMobile = () => {
    setMenuMobile(prevState => !prevState)
  };

  const closeMenu = () => setMenuMobile(false)



  const toggle_mode = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }
  return (
    <div className="navbar">
      <img src={theme === 'dark' ? logoLigth : logoDark} alt="" className='logo-icon' />


      <div className={menuMobile ? "navContainer_Open" : "navContainer"} id='menuLinks' >
          <Link to='home' spy={true} smooth={true} offset={50} duration={500} className='navLink' onClick={closeMenu} id='homeLink'>Inicio</Link>
          <Link to='aboutUs' spy={true} smooth={true} offset={50} duration={500} className='navLink'onClick={closeMenu} id='nosotrosLink'>Nosotros</Link>
          <Link to='service' spy={true} smooth={true} offset={50} duration={500} className='navLink'onClick={closeMenu} id='servicioLink'>Servicios</Link>
          <Link to='contact' spy={true} smooth={true} offset={50} duration={500} className='navLink'onClick={closeMenu}id='contactoLink'>Contacto</Link>
      </div>





      <div className='toggle-nav'>
        <a onClick={(CambioMenuMobile)} className='iconMenu'>
          {menuMobile ? (<FaTimes className='faTimes' />) : (<FaBars className='faBars' />)}
        </a>

        <img onClick={() => { toggle_mode() }} src={theme === 'dark' ? darkIcon : ligthIcon} alt="" className='toggle-icon' />
      </div>
    </div>
  )
}

export default Navbar


