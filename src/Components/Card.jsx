import styles from './Card.module.css';
import { useState } from "react"
import { Link } from 'react-router-dom'

function Card(props){

    console.log(props)

    const [favs, setFavs] = useState(
        localStorage.getItem("favsOdonto")
        ? JSON.parse(localStorage.getItem("favsOdonto")) : []
    )

    function agregarFav(user){
        if(favs.some((fav)=> fav.id === user.id)) {
            return
        }
        const favorites = [...favs, user]
        setFavs(favorites)
        localStorage.setItem("favsOdonto",JSON.stringify(favorites))
    }

    return (
        <div className = {styles.card} key={props.dato.id}>
            <img className="avatar" src="../../public/img/medic.png" alt="Avatar" />
            <div className={styles.name}>{props.dato.name}</div>
            <div className={styles.email}>{props.dato.username}</div>
            <div className={styles.id}>{props.dato.id}</div>
            <Link to={`/dentist/${props.dato.id}`}>
                <button className={styles.button}>Detalle</button>
            </Link>
            <button className={styles.button}
                 onClick={() => agregarFav(props.dato)}
            >Favorito</button>
        </div>            
    )
}

export default Card