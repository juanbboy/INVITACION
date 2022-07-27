import React from 'react'
import './hospedaje.css';

const Hospedaje = () => {
    return (
        <div className='p-5'>
            <div className='tex1 text-center'>OPCIONES DE HOSPEDAJE</div>
            <div className='row text-center'>
                <div className='col-md-4 cubo'>
                    <div className='tex3'>GHL HOTEL CLUB EL PUENTE</div>
                    <div className='m-4 p'>
                        Km. 2 Vía, Girardot - Melgar, Girardot-Carmen De Apicalá, Girardot, Cundinamarca
                    </div>
                    <a href="https://www.booking.com/hotel/co/ghl-club-el-puente.es.html?aid=306396&label=girardot-RT%2AWc_SZLWxgLPmFai%2AplAS392667753760%3Apl%3Ata%3Ap130%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666555%3Akwd-4193920479%3Alp1003659%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YdnZzv7u3SiOco5fpqS0M1M&sid=98c82cb26ae5d0f01fc40a9bedbaa211&all_sr_blocks=58101809_200183497_2_1_0;checkin=2022-10-16;checkout=2022-10-17;dest_id=-585192;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=4;highlighted_blocks=58101809_200183497_2_1_0;hpos=4;matching_block_id=58101809_200183497_2_1_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=58101809_200183497_2_1_0__39600000;srepoch=1658867063;srpvid=8c9d8f7ae6b604e7;type=total;ucfs=1&#hotelTmpl" target="_blank" rel="noopener noreferrer">
                        <button className='button1'>Ver Web</button>
                    </a>
                    <br />
                </div>
                <div className='col-md-4 cubo'>
                    <div className='tex3'>VILLA DANIELA</div>
                    <div className='m-4 p'>
                        Alojamiento en el lugar de la recepción/ consultar con Juan Carlos o Alejandra
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=573132598775" target="_blank" rel="noopener noreferrer">
                        <button className='button1'>Ver Web</button>
                    </a>
                    <br />
                </div>
                <div className='col-md-4 cubo'>
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