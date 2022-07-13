import React from 'react'
import './moments.css';

const Moments = () => {
    return (
        <div className='text-center p-4'>
            <div className='tex1'>NUESTROS MOMENTOS</div>
            <div className="imagen">
                <img width="168" height="15" src="../assets/3.png" className="attachment-medium_large size-medium_large jetpack-lazy-image lazyloaded jetpack-lazy-image--handled" alt="" sizes="(max-width: 768px) 100vw, 768px" data-ll-status="loaded" data-lazy-loaded="1" loading="eager"></img>
            </div>
            <div className="row align-items-center p-4 ">
                <div className="col-md-4 p-2">
                    <img src="../assets/2.png" width="100%" />
                </div>
                <div className="col-md-4 p-2 ">
                    <img src="../assets/2.png" width="100%" />
                </div>
                <div className="col-md-4 p-2 ">
                    <img src="../assets/2.png" width="100%" />
                </div>
                <div className="col-md-4 p-2 ">
                    <img src="../assets/2.png" width="100%" />
                </div>
                <div className="col-md-4 p-2 ">
                    <img src="../assets/2.png" width="100%" />
                </div>
                <div className="col-md-4 p-2 ">
                    <img src="../assets/2.png" width="100%" />
                </div>
            </div>
        </div>
    )
}

export default Moments