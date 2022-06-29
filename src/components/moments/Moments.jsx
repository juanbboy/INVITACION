import React from 'react'
import './moments.css';

const Moments = () => {
    return (
        <div className='text-center'>
            <div className='titulo'>NUESTROS MOMENTOS</div>
            <div className="imagen">
                <img width="168" height="25" src="../assets/3.png" className="attachment-medium_large size-medium_large jetpack-lazy-image lazyloaded jetpack-lazy-image--handled" alt="" sizes="(max-width: 768px) 100vw, 768px" data-ll-status="loaded" data-lazy-loaded="1" loading="eager"></img>
            </div>
            <div class="row align-items-center p-4">
                <div class="col-md-4 h-100 p-2 ">
                    <img src="../assets/1.png" alt="Responsive image" width="370" height="300" />
                </div>
                <div class="col-md-4 h-100 p-2 ">
                    <img src="../assets/1.png" alt="Responsive image" width="370" height="300" />
                </div>
                <div class="col-md-4 h-100 p-2 ">
                    <img src="../assets/1.png" alt="Responsive image" width="370" height="300" />
                </div>
                <div class="col-md-4 h-100 p-2 ">
                    <img src="../assets/1.png" alt="Responsive image" width="370" height="300" />
                </div>
                <div class="col-md-4 h-100 p-2 ">
                    <img src="../assets/1.png" alt="Responsive image" width="370" height="300" />
                </div>
                <div class="col-md-4 h-100 p-2 ">
                    <img src="../assets/1.png" alt="Responsive image" width="370" height="300" />
                </div>
            </div>
        </div>
    )
}

export default Moments