import React from "react";
import { useState } from "react";
import './countdown.css';
// import cuatro from '../../assets/4.png';


const Countdown = () => {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [mins, setMins] = useState()
    const [seconds, setSeconds] = useState()
    const newYear = '16 oct 2022'

    const countTimer = () => {
        const newYearDate = new Date(newYear);
        const currentDate = new Date();


        const totalSeconds = (newYearDate - currentDate) / 1000;
        const daysCalc = Math.floor(totalSeconds / 3600 / 24);
        const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
        const minsCalc = Math.floor(totalSeconds / 60) % 60;
        const secondsCalc = Math.floor(totalSeconds % 60);


        setDays(daysCalc)
        setHours(hoursCalc)
        setMins(minsCalc)
        setSeconds(secondsCalc)

    }
    setInterval(countTimer, 1000);

    const containerStyle = {
        backgroundColor: '#F4F0ED',
        backgroundImage: 'url(https://noviasdiez.com/wp-content/uploads/2021/03/leaf-ornament.png)',
        // backgroundImage: `url(${cuatro})`,
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        // padding: '120px 0px 120px 0px'
    }

    return (
        <div style={containerStyle} className="fondo">
            <div>
                <div className="tex1">NOS VAMOS A CASAR</div>
            </div>
            <div className="imagen">
                <img width="168" height="15" src="../assets/3.png" className="attachment-medium_large size-medium_large jetpack-lazy-image lazyloaded jetpack-lazy-image--handled" alt="" sizes="(max-width: 768px) 100vw, 768px" data-ll-status="loaded" data-lazy-loaded="1" loading="eager"></img>
            </div>
            <div data-aos="fade-up" className="tex2">
                <p style={{ textAlign: 'center' }}>¡ya falta poco! y estamos felices de celebrar nuestra unión.</p>
            </div>
            <div className="row justify-content-center colum ">
                <div className="col-3">
                    <div className="countdown-container">
                        <div className="number">
                            {days}
                        </div>
                        <div className="concept">DIAS</div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="countdown-container">
                        <div className="number">
                            {hours}
                        </div>
                        <div className="concept">Horas</div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="countdown-container">
                        <div className="number">
                            {mins}
                        </div>
                        <div className="concept">MINUTOS</div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="countdown-container">
                        <div className="number">
                            {seconds}
                        </div>
                        <div className="concept">SEGUNDOS</div>
                    </div>
                </div>
            </div>
            <div className="elementor-widget-container">
                <div className="elementor-text-editor elementor-clearfix">
                    <p style={{ textAlign: 'center' }}>No olviden por seguridad de todos llevar su tapabocas personal y hacer desinfección de manos continuamente.</p>
                </div>
            </div>
        </div >
    )
}


export default Countdown