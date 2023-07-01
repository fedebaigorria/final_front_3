import styles from './Cards.module.css';
import Card  from "./Card";


function Cards(props){

    //<button onClick={algo}>Cambiar tema</button>

    return (
        <div className={styles.container}>
            {props.datos.map((item)=>(
                <Card key={item.id} dato={item}/>
            ))}
        </div>
    )
}

export default Cards