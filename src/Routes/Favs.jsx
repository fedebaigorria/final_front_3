import Card  from "../Components/Card";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";
import '../index.css'

function Favs(){
    const theme = useContext(ThemeContext)
    const odontologo = JSON.parse(localStorage.getItem("favsOdonto"))

    return (
        <>
        <div className={theme.value}>
                <h1>Dentists Favs</h1>
                <div className ="containerCard" >
                {odontologo ? 
                    (odontologo.map((item)=>(
                        <Card key={item.id} dato={item}/>
                    )))
                    : "No hay favoritos"
                }
                </div>
        </div>
        </>
    )
}

export default Favs