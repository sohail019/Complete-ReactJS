import { useEffect } from "react";
import { useState } from "react";
import { Card } from "./components/Card";
import { ThemeBtn } from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/Theme";

function App() {
  //* useState hook to manage the current theme mode
  const [themeMode, setThemeMode] = useState("light");

  //todo: darkTheme Method
  const darkTheme = () => {
    setThemeMode("dark"); // Updates the theme mode state to 'dark'
  };

  //todo: lightTheme Method
  const lightTheme = () => {
    setThemeMode("light"); // Updates the theme mode state to 'light'
  };

  //? useEffect hook that runs whenever the themeMode state changes.
  // This effect updates the HTML element's class to reflect the current theme mode.
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark"); // Remove any existing theme classes

    html.classList.add(themeMode); // Add the current theme mode class ('light' or 'dark')
  }, [themeMode]); //? Dependency array ensures the effect runs when themeMode changes

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme Btn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
