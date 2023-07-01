import Form  from "../Components/Form";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

function Contact(){

  const theme = useContext(ThemeContext)
    return (
      <>
        <div className={theme.value} >
          <h2>Quieres Saber Más? </h2>
          <p>Envíanos tus consultas y nos pondremos en contacto contigo</p>
          <Form />
        </div>  
      </>


      )
}

export default Contact