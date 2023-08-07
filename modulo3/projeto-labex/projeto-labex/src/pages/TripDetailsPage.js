import React from "react"
import { useNavigate } from "react-router-dom";
import { goReturn} from "../routes/coordinator";

 const TripDetailsPage = () => {
const navigate= useNavigate()




    return(

<div>
<div>TripDetailsPage</div>
<p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
<button onClick={() => goReturn(navigate)}  ></button>
</div>


    )

}
export default TripDetailsPage