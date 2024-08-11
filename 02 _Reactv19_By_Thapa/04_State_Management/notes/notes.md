# States

- In ReactJS, state refers to an object that holds data or information about the component.
- State is managed withing the component (just like variables declared in a function).
- However, unlike regular variables, when state changes, React re-renders the component to reflect these changes, keeping the user interface in sync with the data.
- State is dynamic and mutable, meaning it can change over time responsively in response to user actions, server response or other events

## Usage of States
- State is typically used to store data that changes over time, such as user input, API responses
- State is not used to store static data, such as colors, fonts, or other constants.
- State is typically initialized in the constructor of a React component, and updated using the `setState()`
- State is not a global variable, it is specific to the component that owns it.
- State is not a cache, it is a way to manage the data of a component.


## Why the values is not updating in React without State?
- It's because those are normal variables and ReactJS doesn't know that it's going to be changed.
- And ReactJS should respond or update DOM based on that.
- Those value are already rendered on DOM, there is no way they will be re rendered
- For that ReactJS provides a function called "useState"
- This function will return an array with two values, the first one is the current state and the
second one is a function to update the state.
- This type of function which starts with "use" is called Hook.

## What are Hooks?
- Hooks are a way to use state and other React features in functional components.
- They were introduced in React 16.8.
- Hooks allow you to "hook into" React state and lifecycle methods from functional components.
- Hooks don't work inside classes, they only work inside functional components.
- Hooks are a way to use state and other React features in functional components.

## Why Do We Need States in React?
- **Dynamic UI Updates:**
    - States allow you to update the UI dynamically in response to user interactions, server responses, or other events.
    - This ensures that the UI remains in sync with the data, providing a seamless user experience.

- **Interactivity:**
    - State makes your application interactive.
    - It allows users to interact with your application, and the application responds accordingly.
    - By maintaining state, you can create components that respond to user actions, such as clicks, form submissions or keyboard events.

- **Reusability:**
    - States enable reusability of components.
    - You can create a component that can be used multiple times in your application, and each instance of the component can have its own state.
    
- **Easy Debugging:**
    - States make it easier to debug your application.
    - By maintaining state, you can identify issues related to data inconsistencies or unexpected behavior.

- **Better Code Organization:**
    - States help you organize your code better.
    - By separating the state from the props, you can keep your code organized and maintainable.

- **Data Management:**
    - States help you manage data effectively.
    - You can store data in the state and update it as needed.
    - This ensures that your application remains data-driven and responsive.



