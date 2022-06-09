import React from 'react';
import './Endereço.css'

function Endereço(props) {
    return (
        <div className="endereço-container">
            <img src={ props.imagem } />
            <div>
            <h4> { props.nomeendereço}</h4>
                <p>{ props.endereço }</p>
            </div>
        // </div>
    )
}

export default Endereço;