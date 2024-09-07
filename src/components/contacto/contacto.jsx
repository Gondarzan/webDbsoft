import React from 'react'
import './contacto.css'

const Contacto = () => {
    return (
        <div className='contact' id='contact'>
            <div className="rectangle-contact"></div>
            <div className='contact-text'>
                <h2>¿Quieres saber más?</h2>
                <h1 className='title'>Contactanos</h1>
                <form action="">
                    <div className='form-container'>
                        <div className='form-description'>
                            <div className='contact-container'>
                                <div className='contact-cxd'>
                                    <label htmlFor="nome" className='placeHolder'>Nombre</label>
                                    <input id='nome' name='nome' type="text" placeholder='Escribe tu nombre' className='text' />
                                </div>
                                <div className='contact-cxd'>
                                    <label htmlFor="lastName" className='placeHolder'>Apellido</label>
                                    <input type="text" id='lastName' name='lastName' placeholder='Escribe tu apellido' className='text' />
                                </div>
                            </div>
                            <div className='contact-container-l'>
                                <label htmlFor="mail" className='placeHolder'>Email</label>
                                <input type='mail' id='mail' name='mail' placeholder='Escribe tu email' className='text' />
                            </div>
                            <div className='contact-container-l'>
                                <label htmlFor="message" className='placeHolder' >Mensaje</label>
                                <textarea className='message' id='message' name="message" required="message" placeholder='Quiero más detalles...'></textarea>
                            </div>
                        </div>
                        <button className='button-form'>Enviar mensaje</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contacto