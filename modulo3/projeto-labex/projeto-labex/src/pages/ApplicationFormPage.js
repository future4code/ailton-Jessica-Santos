import React from "react"
import { useNavigate } from "react-router-dom"
import { goReturn } from "../routes/coordinator";
const ApplicationFormPage = () => {
const navigate=  useNavigate()





    return(
    <div>
<div> ApplicationFormPage</div>

<p>Venha viajar com a gente.</p>
<button onClick={() => goReturn(navigate)} >Voltar</button>
<button >Enviar</button>
</div>


    )

}
export default ApplicationFormPage