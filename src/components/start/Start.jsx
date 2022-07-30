import React from 'react'
import cinco from '../../assets/5.jpg';
import './start.css';

const Start = () => {

    const containerStyle = {
        backgroundImage: `url(${cinco})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '70px 0px 200px 0px'
        // opacity: 0.5,
    }


    return (

        <div style={containerStyle}  >
            <h1 className='text1 p-2' style={{ color: "#767B4B", fontFamily: 'Cormorant Garamond', textAlign: "center", fontWeight: 'bold' }}>NUESTRA BODA </h1>
            <h1 className='text2 p-4' data-aos="fade-up" style={{ color: "#3D4212", fontFamily: 'Cormorant Garamond', textAlign: "center", fontWeight: '450' }}>JUAN CARLOS <em>&amp;</em> ALEJANDRA</h1>
            <h1 className='text3' data-aos="fade-up" data-aos-delay="300" style={{ color: "#767B4B", fontFamily: 'Italianno', textAlign: "center", opacity: 0.8 }}>Acompañanos a Celebrar </h1>
            <div className="row justify-content-center ">
                <div className="col-md-2" >
                    <hr className='linea ' />
                    <h1 data-aos="fade-up" data-aos-delay="400" style={{ color: "#3D4212", fontFamily: 'Cormorant Garamond', textAlign: "center", fontSize: '25px', fontWeight: 'bold' }}>DOMINGO</h1>
                    <hr className='linea' />
                </div>
                <div className="col-md-2 num" data-aos="fade-up" data-aos-delay="400">
                    <div style={{ color: "#3D4212", fontFamily: 'Cormorant Garamond', textAlign: "center", letterSpacing: '5px' }}>16</div>
                </div>
                <div className="col-md-2 col1">
                    <hr className='linea' />
                    <div data-aos="fade-up" data-aos-delay="400" style={{ color: "#3D4212", fontFamily: 'Oxygen', textAlign: "center", letterSpacing: '6px' }}>2022</div>
                    <hr className='linea' />
                </div>
                <div className="row justify-content-center p-1" data-aos="fade-up" data-aos-delay="600">
                    <div className="col-md-2 col2">
                        <h1 style={{ color: "#3D4212", fontFamily: 'Italianno', textAlign: "center", fontSize: '45px' }}>Octubre</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start

