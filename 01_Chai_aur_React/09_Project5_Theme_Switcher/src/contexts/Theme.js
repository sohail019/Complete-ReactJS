import { createContext, useContext } from "react";

//todo: create a context to hold the theme information, with default values.
//* The context will  contain the current theme mode and 2 funcs: one to set dark theme and one to set light theme.
export const ThemeContext = createContext({
    themeMode: 'light', //? default is set to light
    darkTheme: () => {}, //? placeholder func to switch dark theme
    lightTheme: () => {}, //? placeholder func to switch light theme
})

//todo: export the ThemeProvider, which will be used to wrap components that need access to the ThemeContext
export const ThemeProvider  = ThemeContext.Provider

//todo: custom hook to access the ThemeContext
//* This function can be used within components to access and modify the theme.
export default function useTheme(){
    return useContext(ThemeContext)
}