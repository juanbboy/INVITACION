import React from 'react'
import './hospedaje.css';

const Hospedaje = () => {
    return (
        <div className='p-5'>
            <div className='tex1 text-center' data-aos="fade-up">OPCIONES DE HOSPEDAJE</div>
            <div className='row text-center'>
                <div className='col-md-4 cubo' data-aos="fade-up">
                    <div className='tex3'>GHL HOTEL CLUB EL PUENTE</div>
                    <div className='m-4 p'>
                        Km. 2 Vía, Girardot - Melgar, Girardot-Carmen De Apicalá, Girardot, Cundinamarca
                    </div>
                    <a href="https://www.ghlhoteles.com/hoteles/colombia/girardot/ghl-relax-el-puente/" target="_blank" rel="noopener noreferrer">
                        <button className='button1'>Ver Web</button>
                    </a>
                    <br />
                </div>
                <div className='col-md-4 cubo' data-aos="fade-up">
                    <div className='tex3'>MILFOR CASA CAMPESTRE</div>
                    <div className='m-4 p'>
                        Alojamiento en el lugar de la recepción/ consultar con Juan Carlos o Alejandra
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=573132598775" target="_blank" rel="noopener noreferrer">
                        <button className='button1'>Consulta</button>
                    </a>
                    <br />
                </div>
                <div className='col-md-4 cubo' data-aos="fade-up">
                    <div className='tex3'>BOOKING</div>
                    <div className='m-4 p'>
                        Plataforma digital dedicada a la oferta de alojamientos a particulares
                    </div>
                    <a href="https://www.booking.com/index.es.html?label=gen173nr-1DCAEoggI46AdIM1gEaDKIAQGYAQq4ARfIAQzYAQPoAQGIAgGoAgO4AsevgZcGwAIB0gIkMzdmZDUzOTUtYmYzYS00NGRmLWFiYmYtZmYzYzg3M2JmNDQy2AIE4AIB&sid=354fed6abf5b02e830915adf19b7f941&keep_landing=1&sb_price_type=total&" target="_blank" rel="noopener noreferrer">
                        <button className='button1'>Ver Web</button>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Hospedaje