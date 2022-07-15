import { goReturn } from "../routes/coordinator";
import React from "react"
import { useNavigate } from "react-router-dom";


 const CreateTripPage = () => {
    const navigate=  useNavigate()



    return(

<div>
    <h1>Create Trip Page</h1>
<p>Formulário para o administrador criar uma nova viagem</p>
<button >Enviar Formulario</button>
<button onClick={() => goReturn(navigate)}>Voltar</button>

</div>


    )

}
export default CreateTripPage