import { createContext, useState} from "react";

export const ThemeContext = createContext();

function ThemeProvider(props){

    const [theme, setTheme] = useState("light")

    function toogleTheme(){
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }

    const returnedValue = {
        value : theme,
        changeValue : toogleTheme,
    }

    return (
        <ThemeContext.Provider value={returnedValue}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider