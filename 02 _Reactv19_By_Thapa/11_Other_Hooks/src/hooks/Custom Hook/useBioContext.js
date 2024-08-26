// import { useContext } from "react"
import {use} from "react"
import { BioContext } from "../../contexts/Context"

export const useBioContext = () =>{
  //! useContext must be called at the top level of your component
  // const context = useContext(BioContext)

  // * use can be called inside conditionals like if and loops like for. use is preferred over useContext because it is more flexible.
  const context = use(BioContext)
  return context;
} 