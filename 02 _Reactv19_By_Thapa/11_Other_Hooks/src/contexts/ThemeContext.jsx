import { useState, createContext } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light')

    const handleToggleTheme = () => {
        return setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light" )
    }

    return (
            <ThemeContext.Provider value={{theme, handleToggleTheme}}>
                {children}
            </ThemeContext.Provider>
    )
}
