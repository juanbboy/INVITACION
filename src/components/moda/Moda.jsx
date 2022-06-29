import React from 'react'
import './moda.css';
const Moda = () => {
    return (
        <div className='conte p-5' >
            <div className='text-center'>
                <div className='titulo1'>Tipo de regalo</div>
                <div className='cont p-3'>Lluvia de sobres</div>
                <div className="imagen">
                    <img width="168" height="20" src="../assets/3.png" className="attachment-medium_large size-medium_large jetpack-lazy-image lazyloaded jetpack-lazy-image--handled" alt="" sizes="(max-width: 768px) 100vw, 768px" data-ll-status="loaded" data-lazy-loaded="1" loading="eager"></img>
                </div>
            </div>
            <div className='titulo1 p-4'>Código de vestuario</div>
            <div className='row'>
                <div className='col-6 text-end border-end border-2 color-#767B4B' >
                    <div className='cont p-3'>Hombres</div>
                    <div className='parrafo p-2'>
                        Formal guayabera
                    </div>
                    <div className="">
                        <img src="../assets/1.png" alt="Responsive image" width="170" height="300" />
                    </div>
                </div>
                <div className='col-6 text-start' >
                    <div className='cont p-3'>Mujeres</div>
                    <div className='parrafo p-2'>Vestido largo</div>
                    <div className="">
                        <img src="../assets/1.png" alt="Responsive image" width="170" height="300" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Moda