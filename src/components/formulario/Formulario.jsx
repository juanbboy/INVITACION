import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
// import { setError, removeError } from '../../actions/ui';
import axios from 'axios';
import Swal from 'sweetalert2';
import './formulario.css';

const Formulario = () => {

    // const navigate = useNavigate()
    // const dispatch = useDispatch();
    // const { msgError } = useSelector(state => state.ui);
    const [formValues, handleInputChange, reset] = useForm({
        name: '',
    });
    const { name, obs } = formValues;

    // const isFormValid = () => {
    //     if (name.trim().length < 2) {
    //         // console.log('nombre requerido');
    //         dispatch(setError('Nombre Requerido'));
    //         return false;
    //     }
    //     else if (cod.trim().length < 2) {
    //         // console.log('nombre requerido');
    //         dispatch(setError('Cod Requerido'));
    //         return false;
    //     }
    //     dispatch(removeError());
    //     return true;
    // }

    const handleRegister = (e) => {
        e.preventDefault();
        {
            // dispatch(startRegisterEmailPassword(name));

            // axios.post(`http://localhost:4002/api/regneedle`, formValues)
            axios.post(`https://needlecpd.herokuapp.com/api/regneedle`, formValues)
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Info. Enviada',
                        showConfimButton: false,
                        timer: 1200
                    })
                    reset();
                    //navigate("/needlelist")
                })
        }
    }

    const event = (e) => {
        handleInputChange(e)
    }

    return (
        <div className="conte text-center p-4" >
            <div className="tex1 p-5">Confirma tu Asistencia</div>
            {/* <form onSubmit={handleRegister}> */}
            {/* {
                        msgError && (
                            <div className="alert alert-danger" role="alert">
                                {msgError}
                            </div>
                        )
                    } */}

            {/* <div className="container">
                    <label htmlFor="exampleInputPassword1" className="cont1">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputname"
                        name="cod"
                        value={name}
                        onChange={event}
                        required={true}
                    />
                </div>

                <div className="container">
                    <div>
                        <label htmlFor="inputext" className="cont1">Observaciones </label>
                    </div>

                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputname"
                        name="obs"
                        value={obs}
                        onChange={handleInputChange}
                    />
                </div> */}
            <div>
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=pmZCS2gTr0GtWlnrY0962NnveMndEHpBknonPKUckZBUMkdYT05DNEpJMDFWVVNBMThPTkNFMTJJRy4u" target="_blank" rel="noopener noreferrer">
                    <button className="button1" style={{ padding: '10px 40px' }} >Click Aqui</button>
                </a>
            </div>
            {/* </form> */}
        </div >
    )

}


export default Formulario