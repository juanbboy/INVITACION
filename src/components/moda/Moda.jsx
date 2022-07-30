import React from 'react'
import './moda.css';
const Moda = () => {
    return (
        <div className='conte p-5' >
            <div className='text-center'>
                <div className='titulo1' data-aos="fade-up">Tipo de regalo</div>
                <div className='cont p-3' data-aos="fade-up">Lluvia de sobres</div>
                <div className="imagen">
                    <img width="168" height="20" src="../assets/3.png" className="attachment-medium_large size-medium_large jetpack-lazy-image lazyloaded jetpack-lazy-image--handled" alt="" sizes="(max-width: 768px) 100vw, 768px" data-ll-status="loaded" data-lazy-loaded="1" loading="eager"></img>
                </div>
            </div>
            <div className='titulo1 p-4' data-aos="fade-up">Código de vestuario</div>
            <div className='row'>
                <div className='col-sm-6 bloq1' >
                    <div className='cont' data-aos="fade-up">Hombres</div>
                    <div className='parrafo p-2' data-aos="fade-up">
                        Formal guayabera
                    </div>
                    <div className="p-3" data-aos="fade-right">
                        <img src="../assets/completa-y-jeans4.webp" alt="Responsive image" width="130" height="300" />
                    </div>
                </div>
                <div className='col-sm-6 bloq2 ' >
                    <div className='cont' data-aos="fade-up">Mujeres</div>
                    <div className='parrafo p-2' data-aos="fade-up">Vestido largo</div>
                    <div className="p-3" data-aos="fade-left">
                        <img src="../assets/mujeres2.webp" alt="Responsive image" width="200" height="300" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Moda