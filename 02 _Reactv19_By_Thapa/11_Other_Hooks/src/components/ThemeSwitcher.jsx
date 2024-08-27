import {use} from "react"
import { ThemeContext } from "../contexts/ThemeContext";

// creating a component
export const ThemeSwitcher = () => {
    const {theme, handleToggleTheme} = use(ThemeContext)

    const bgStyling = theme === "light" ? "bg-white" : "bg-gray-800"
    const textStyling = theme === "dark" ? "text-white" : "text-gray-800"
    const message = theme === "light" ? "Light" : "Dark";

  return (
    <div
      className={` p-24 h-lvh flex flex-col justify-center items-center ${bgStyling} ${textStyling} `}
    >
      <h1
        className={`my-4 text-xl`}
      >
        Dark Light Mode Website
      </h1>
      <p
        className={`my-4 text-l  `}
      >
        Hello!! I am {message}
      </p>
      <button
      onClick={handleToggleTheme}
        className="bg-teal-500 hover:bg-teal-600 text-white rounded-md mt-4 p-4"
      >
        Switch to {message} Mode
      </button>
    </div>
  );
};
