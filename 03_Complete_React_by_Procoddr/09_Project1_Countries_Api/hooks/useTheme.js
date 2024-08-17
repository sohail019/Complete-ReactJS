import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = () =>  [isDark, setIsDark] = useContext(ThemeContext); 
