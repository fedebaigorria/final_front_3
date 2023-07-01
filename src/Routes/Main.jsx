import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import Cards from "../Components/Cards";

function Main(){

    const theme = useContext(ThemeContext)

    const [data, setData] = useState([])

    async function fetchData() {
        try{
            const dataFetched = await(await fetch(`https://jsonplaceholder.typicode.com/users`)).json();
            setData(dataFetched)
        }catch(error){
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <div className={theme.value}>
            <h1>Mai1n</h1>
            {data? <Cards datos={data}/> : null}
        </div>
    )
}

export default Main;
