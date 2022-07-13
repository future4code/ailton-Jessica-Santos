import React from "react"
import { useNavigate } from "react-router-dom"
import { goReturn, goToCreate, goToDetails } from "../routes/coordinator";

const AdminHomePage = () => {
    const navigate = useNavigate()

   return(
      
   <div>
    <h1>AdminHomePage</h1>
     <p>Área admin</p>
     <div>
       <button onClick={() => goToDetails(navigate)}>Viagem 1</button>
       <button>x SEM</button>
     </div>
     <button onClick={() => goReturn(navigate)}>Voltar</button>
     <button onClick={() => goToCreate(navigate)}>Criar Viagem</button>
     <button>SAIR SEM</button>
   </div>
    )

}
export default AdminHomePage