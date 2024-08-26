import { createContext } from "react";

export const BioContext = createContext()


export const BioProvider = ({children}) => {

    const myName = "Sohail"
    const myAge = 21

    return (
        <BioContext.Provider value={{myName, myAge}}>
            {children}
        </BioContext.Provider>
    )
}