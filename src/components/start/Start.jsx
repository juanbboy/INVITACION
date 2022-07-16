import React from 'react'
// import dos from '../../assets/2.jpg';
// import uno from '../../assets/1.jpg';
// import tres from '../../assets/3.jpg';
// import cuatro from '../../assets/4.jpg';
import cinco from '../../assets/5.jpg';
import './start.css';
import 'animate.css';

const Start = () => {

    const containerStyle = {
        backgroundImage: `url(${cinco})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // opacity: 0.5,
    }


    return (

        <div style={containerStyle} className="py-5 " >
            <h1 className='text1 mb-5 animate__animated animate__fadeInUp animate__delay-0.4s' style={{ color: "#767B4B", fontFamily: 'Cormorant Garamond', textAlign: "center", fontWeight: 'bold' }}>NUESTRA BODA </h1>
            <h1 className='text2 mb-5 animate__animated animate__fadeInUp animate__delay-0.6s' style={{ color: "#3D4212", fontFamily: 'Cormorant Garamond', textAlign: "center", fontWeight: '450' }}>JUAN CARLOS <em>&amp;</em> ALEJANDRA</h1>
            <h1 className='text3 mb-5 animate__animated animate__fadeInUp animate__delay-0.8s' style={{ color: "#767B4B", fontFamily: 'Italianno', textAlign: "center", opacity: 0.8 }}>Acompañanos a Celebrar </h1>
            <div className="row justify-content-center ">
                <div className="col-md-2 animate__animated animate__fadeInUp animate__delay-1.0s">
                    <hr className='linea ' />
                    <h1 style={{ color: "#3D4212", fontFamily: 'Cormorant Garamond', textAlign: "center", fontSize: '25px', fontWeight: 'bold' }}>DOMINGO</h1>
                    <hr className='linea' />
                </div>
                <div className="col-md-2 num animate__animated animate__fadeInUp animate__delay-1.2s">
                    <div style={{ color: "#3D4212", fontFamily: 'Cormorant Garamond', textAlign: "center", letterSpacing: '5px' }}>16</div>
                </div>
                <div className="col-md-2 col1 animate__animated animate__fadeInUp animate__delay-1.4s">
                    <hr className='linea' />
                    <div style={{ color: "#3D4212", fontFamily: 'Oxygen', textAlign: "center", letterSpacing: '6px' }}>2022</div>
                    <hr className='linea' />
                </div>
                <div className="row justify-content-center p-1 animate__animated animate__fadeInUp animate__delay-1.4s">
                    <div className="col-md-2 col2">
                        <h1 style={{ color: "#3D4212", fontFamily: 'Italianno', textAlign: "center", fontSize: '45px' }}>Octubre</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start

