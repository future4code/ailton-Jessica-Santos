import React from "react"
import { useNavigate } from "react-router-dom";
import { goReturn, goToApplication } from "../routes/coordinator";

  const ListTripsPage = () => {

    const navigate=  useNavigate()



    return(

      <div>
      <div> ApplicationFormPage</div>
      
      <p>Venha viajar com a gente.</p>
      <button onClick={() => goReturn(navigate)} >Voltar</button>
      <button onClick={() => goToApplication(navigate)}>Inscreva-se</button>
      </div>

    )

}
export default ListTripsPage