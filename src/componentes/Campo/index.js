import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = ({type='text', aoAlterado, label, valor, obrigatorio, placeholder}) => {

    const aoDigitado = (evento)=> {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo-texto campo-texto${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor}
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default CampoTexto