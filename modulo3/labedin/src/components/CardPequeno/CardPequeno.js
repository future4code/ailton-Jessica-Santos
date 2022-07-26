import React from 'react';

import styled from 'styled-components'
const Container =styled.div `
    display: flex;
  align-items: center;
  flex-direction: row;
    border: 1px solid black;
    padding: 10px 5px;
    margin-bottom: 10px;
    height: 100px;
`

const Icone =styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Titulo =styled.h4 `   
 margin-bottom: 15px;
`

const Card =styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `


function CardPequeno(props) {
    return (

        <Container>
            <Icone src={props.imag} />
            <Card>
                <Titulo>{props.name}</Titulo>
                <p>{props.desc}</p>
            </Card>

</Container>
        
    )
}
export default CardPequeno