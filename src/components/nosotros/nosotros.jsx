import React from 'react'
import './nosotros.css'
import UsImg from '../../assets/img-us.webp'

const Nosotros = () => {
  return (
    <div className='us-container' id='aboutUs'>
        <img src={UsImg} alt="" />
        <div className="us-text">
            <h2>Nuestro equipo</h2>
            <h1>Potencia tus proyectos  con la innovación total <br /> de nuestros sistemas.</h1>
            <p>Nos adaptamos a tus necesidades y colaboramos <br /> 
               estrechamente contigo para diseñar y ejecutar la <br /> 
               planificación ideal, asegurando soluciones de <br />
               software que potencien tu éxito empresarial
            </p>
        </div>
    </div>
  )
}

export default Nosotros