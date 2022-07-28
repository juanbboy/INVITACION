import React from 'react'
import { Carousel } from 'react-bootstrap';
import './sites.css';
import uno from '../../assets/020.jpg';
import dos from '../../assets/012.JPG';


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
                <h2 className="tex1">El lugar de nuestra boda</h2>
            </div>

            <div className='carrusel'>
                <Carousel >
                    <Carousel.Item className='caja'>
                        <img
                            className=" w-100 jpg "
                            src="../assets/011.jpg"
                            alt="First slide"
                            height="525"
                        />
                        <Carousel.Caption className='carru-capti'>
                            <h1 className='titu'>Ceremonia</h1>
                            <p className='parra'>Capilla Madre de la Divina Providencia.
                                Calle 200. Diagonal a la portería del conjunto de casas prados de Laurentia
                                Floridablanca, Santander
                                <br />
                                5:00 pm
                            </p>
                            <a href="https://www.google.com/maps/place/Parroquia+Sagrada+Familia,+Girardot,+Cundinamarca/@4.3000783,-74.8156883,19z/data=!4m5!3m4!1s0x8e3f28e61cf32037:0xab1649598f971287!8m2!3d4.3000227!4d-74.8158941">
                                <button className='button'>Ver Mapa</button>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="w-100 jpg"
                            // src="../assets/012.png"
                            src="../assets/012.jpg"
                            alt="second slide"
                            height="525"

                        />
                        <Carousel.Caption className='carru-capti'>
                            <h1 className='titu'>Recepción</h1>
                            <p className='parra'>Capilla Madre de la Divina Providencia.
                                Calle 200. Diagonal a la portería del conjunto de casas prados de Laurentia
                                Floridablanca, Santander
                                <br />
                                5:00 pm
                            </p>
                            <a href="https://www.google.com/maps/place/Villa+Daniela/@4.2943691,-74.7928928,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f289ac83b6e5f:0xeb7d237f089dfe55!8m2!3d4.2943638!4d-74.7907041" target="_blank" rel="noopener noreferrer">
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