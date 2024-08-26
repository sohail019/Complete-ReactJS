import { useContext } from "react"
import { BioContext } from "../../contexts/Context"

export const useBioContext = () =>{

    const context = useContext(BioContext)
    return context
} 