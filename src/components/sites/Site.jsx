import React from 'react'
import { Carousel } from 'react-bootstrap';
import './sites.css';
// import uno from '../../assets/020.jpg';
// import dos from '../../assets/012.JPG';


const Site = () => {


    const containerStyle = {
        // backgroundImage: `url(${cinco})`,
        // backgroundColor: '#F4F0ED',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // opacity: 0.5,
        textAlign: 'center',
    }

    return (
        <div style={containerStyle} className="contai">
            <div>
                <h2 className="tex1" data-aos="fade-up">El lugar de nuestra boda</h2>
            </div>

            <div className='carrusel'>
                <Carousel data-aos="fade-up">
                    <Carousel.Item className='caja'>
                        <img
                            className=" w-100 jpg "
                            src="../assets/012.png"
                            alt="First slide"
                            height="525"
                        />
                        <Carousel.Caption className='carru-capti'>
                            <h1 className='titu'>Ceremonia</h1>
                            <p className='parra'>Parroquia Sagrada Familia, Calle 10 A N. 18A - 43 Barrio Centenario, Girardot, Cundinamarca
                                <br />
                                5:30 pm
                            </p>
                            <a href="https://www.google.com/maps/place/Parroquia+Sagrada+Familia,+Girardot,+Cundinamarca/@4.3000783,-74.8156883,19z/data=!4m5!3m4!1s0x8e3f28e61cf32037:0xab1649598f971287!8m2!3d4.3000227!4d-74.8158941">
                                <button className='button'>Ver Mapa</button>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img opacity='0.2'
                            className="w-100 jpg"
                            src="../assets/011.jpg"
                            alt="second slide"
                            height="525"
                        />
                        <Carousel.Caption className='carru-capti'>
                            <h1 className='titu'>Recepción</h1>
                            <p className='parra'>Milfor Casa Campestre, Calle 9 No 4 - 40 Isla del Sol, Ricaurte, Cundinamarca
                                <br />
                                7:00 pm
                            </p>
                            <a href="https://www.waze.com/es-419/live-map/directions/milfor-casa-campestre-ricaurte-av.-carlos-medina-zarate?to=place.w.186908715.1869152685.24640355" target="_blank" rel="noopener noreferrer">
                                <button className='button'>Ver Mapa</button>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    )
}

export default Site