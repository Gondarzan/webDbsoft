import React from 'react'
import './inicio.css'
import arrowLight from '../../assets/arrow-icon.webp'
import darkArrow from '../../assets/arrow-darkIcon.webp'
import { Link } from 'react-scroll'


const Inicio = ({ theme }) => {

  return (
    <div className='inicio' id='home'>
      <div className="inicio-text">
        <h2>DBSoft Co.</h2>
        <h1 className='title'>Tu éxito, nuestro software:  innovando para tu crecimiento</h1>
        <p>Nuestra pasión por la innovación nos permite crear soluciones tecnológicas
          avanzadas que optimizan tus operaciones y te brindan una ventaja competitiva.
        </p>
      </div>
      <div className="arrowIcon-container">
        <Link to='aboutUs' spy={true} smooth={true} offset={50} duration={500}>
          <img src={theme == 'dark' ? arrowLight : darkArrow} alt="" className='arrow-icon' />
        </Link>
      </div>
      <div className="rectangle"></div>
      
    </div>
  )
}

export default Inicio