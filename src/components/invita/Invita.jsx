import React from 'react'

const Invita = () => {
    return (
        <div className='text-center' style={{ padding: "80px 0px" }}>
            <div className='tex1'>ESTÁS INVITADO</div>
            <div className="imagen">
                <img width="168" height="15" src="../assets/3.png" className="attachment-medium_large size-medium_large jetpack-lazy-image lazyloaded jetpack-lazy-image--handled" alt="" sizes="(max-width: 768px) 100vw, 768px" data-ll-status="loaded" data-lazy-loaded="1" loading="eager"></img>
            </div>
            <div className='tex2' style={{ padding: "10px 320px" }}>
                <div >Apreciada familia XXXX, tenemos el gusto de invitarlos a celebrar nuestro matrimonio y que hagan parte de este momento tan especial donde cumpliremos el deseo de unir nuestras vidas bajo la bendición de Dios.</div>
                <div className='p-0'>Recuerda que está invitación es para XXX personas, por favor confirma la asistencia en el formulario al final de la página.</div>
            </div>
        </div>
    )
}

export default Invita