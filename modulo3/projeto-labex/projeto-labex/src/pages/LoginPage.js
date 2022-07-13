import React from "react"
import { useNavigate } from "react-router-dom";
import { goReturn,goToAdmin } from "../routes/coordinator";


 const LoginPage = () => {
    const navigate=  useNavigate()
    return(

        <div>
        <div> ApplicationFormPage</div>
        
        <p>Faça o seu login</p>
      <input
      placeholder={"E-mail"}
      />
      <input
      placeholder={"E-mail"}
      />

        <button onClick={() => goReturn(navigate)} >Voltar</button>
        <button onClick={() => goToAdmin(navigate)}>Entrar</button>
        </div>

    )

}
export default LoginPage