import React from 'react'
import { Carousel } from 'react-bootstrap';
import './sites.css';


const Site = () => {
    const containerStyle = {
        // backgroundImage: `url(${cinco})`,
        backgroundColor: '#F4F0ED',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // opacity: 0.5,
        textAlign: 'center',
    }

    return (
        <div style={containerStyle} className="p-4">
            <div>
                <h2 className="tex1">El lugar de nuestra boda</h2>
            </div>
            <div className='carrusel'>
                <Carousel >
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="../assets/1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption className='text'>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="../assets/1.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="../assets/1.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    )
}

export default Site