import React, { useMemo, useState } from 'react';
import queryString from 'query-string';
import { getInvitado } from '../../selectors/getInvitado';
import './invita.css';


const Invita = () => {
    const [name, setName] = useState('xxxx')
    const [num, setNum] = useState('xxxx')

    //    `` //    const location = useLocation();

    const { q = '' } = queryString.parse(window.location.search);
    console.log("q")
    console.log(q)
    const invitadofind = useMemo(() => getInvitado(q), [q]);
    console.log("invi")
    console.log(invitadofind);
    console.log();

    return (
        <div>
            {
                invitadofind.map(invitadofind => (

                    <div className='text-center' style={{ padding: "60px 0px" }}>

                        <div className='tex1'>ESTÁS INVITADO</div>
                        <div className="imagen">
                            <img width="168" height="15" src="../assets/3.png" className="attachment-medium_large size-medium_large jetpack-lazy-image lazyloaded jetpack-lazy-image--handled" alt="" sizes="(max-width: 768px) 100vw, 768px" data-ll-status="loaded" data-lazy-loaded="1" loading="eager"></img>
                        </div>
                        <div className='tex2 pad '>
                            <div className='p-3'>Apreciada familia <b style={{ fontWeight: 'bold' }}>{invitadofind.name}</b>, tenemos el gusto de invitarlos a celebrar nuestro matrimonio y que hagan parte de este momento tan especial donde cumpliremos el deseo de unir nuestras vidas bajo la bendición de Dios.</div>
                            <div className='p-3'>Recuerda que está invitación es para <b style={{ fontWeight: 'bold' }}>{invitadofind.cant}</b> personas, por favor confirma la asistencia en el formulario al final de la página.</div>
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Invita