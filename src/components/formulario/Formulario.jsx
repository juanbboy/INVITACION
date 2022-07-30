import React, { useState } from 'react';
import './formulario.css';

const Formulario = () => {
    return (
        <div className="conte text-center p-5" >
            <div className="tex1 p-3" data-aos="fade-up">Confirma tu Asistencia</div>
            <div data-aos="fade-up">
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=pmZCS2gTr0GtWlnrY0962NnveMndEHpBknonPKUckZBUMkdYT05DNEpJMDFWVVNBMThPTkNFMTJJRy4u" target="_blank" rel="noopener noreferrer">
                    <button className="button1" style={{ padding: '10px 30px' }} >Click Aqui</button>
                </a>
            </div>
        </div >
    )
}


export default Formulario