## Create a Context:
const ThemeContext = createContext(); This context will store the current theme and the function to toggle it.

## Create a Provider Component:
Define a ThemeProvider component that wraps its children with the ThemeContext.Provider. Inside ThemeProvider, use the useState hook to manage the theme state, initialized to "light". Define a toggleTheme function that switches the theme between "light" and "dark".

## Provide Context Values:
Pass the theme state and toggleTheme function as the value of the ThemeContext.Provider. This allows any child component to access and manipulate the theme.

## Consume the Context in a Component:
In the DarkLight component, use the use hook to consume the ThemeContext. Destructure the theme and toggleTheme from the context.

## Apply Conditional Styling:
Use conditional class names to apply different styles based on the current theme value. Adjust the background color, text color, and button label according to the current theme.

## Toggle the Theme:
Attach the toggleTheme function to a button's onClick event. This allows the user to switch between light and dark modes by clicking the button.