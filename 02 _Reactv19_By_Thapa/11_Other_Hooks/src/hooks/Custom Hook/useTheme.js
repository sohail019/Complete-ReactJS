import { use } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"


export const useTheme = () => {
    const context = use(ThemeContext)
    return context
}