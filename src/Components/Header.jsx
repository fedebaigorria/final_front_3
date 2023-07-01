import styles from './Header.module.css';
import { Link } from 'react-router-dom'
import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from 'react';

//TODO Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Header(){

    const theme = useContext(ThemeContext)
        
    return (
        <>
        <header className={styles.header}>
            <nav>
                <Link to='./home'>Home</Link>
                <Link to='./contact'>Contacto</Link>
                <Link to='./favs'>Favoritos</Link>
            <button onClick={()=> theme.changeValue()}>Change theme</button>
            </nav>
        </header>
        </>
    )
}

export default Header