import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="pequenocard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nomeemail }</h4>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}

export default CardPequeno;