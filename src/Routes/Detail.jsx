//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { ThemeContext}  from "../Contexts/ThemeContext";
import { useContext } from "react";

function Detail(){
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

    const params = useParams()
    const theme = useContext(ThemeContext)


    const [data, setData] = useState([])

    async function fetchData() {
        try{
            const dataFetched = await(await fetch(`https://jsonplaceholder.typicode.com/users/1`)).json();
            setData(dataFetched)
        }catch(error){
            console.log(error.message)
        }finally{
            
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <div className={theme.value} >
            <h1>Detalle Dentista {params.id} </h1>
            {data && (
                <div>
                    <h2>{data.name}</h2>
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                    <p>{data.website}</p>
                </div>
            )}
        </div>
    )
}

export default Detail