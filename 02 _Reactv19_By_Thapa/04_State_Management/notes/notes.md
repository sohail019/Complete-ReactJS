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

## Type of State
- **Local State:**
    - Local state is a state that is specific to a single component or object
    - It is stored in the component's memory and is not shared with other components
- **Global State:**
    - Global state is a state that is shared across multiple components or objects
    - It is stored in a centralized location, such as a Redux store or a context API
- **Server State:**
    - Server state is a state that is stored on the server and is retrieved by the client
    - It is used to store data that is not sensitive or critical, such as user preferences or settings
- **Session State:**
    - Session state is a state that is stored on the client-side and is specific to a user's
session
    - It is used to store data that is specific to a user's session, such as login information
- **Persistent State:**
    - Persistent state is a state that is stored on the server-side and is retrieved by the client
    - It is used to store data that is critical or sensitive, such as user credentials or financial information

## How State Works?

### Using useState in Functional Components

- **Initialization:**
    - You call useState with the initial state value.
    - It returns an array with two elements: the current value and a function to update that state.

- **Updating State:**
    - You call the update function with a new value.
    - The state is updated, and the component re-renders with the new state.

- **Preservation of State:**
    - The state is preserved between renders.
    - When the component re-renders, it uses the previous state value.

### What is React Reconciliation?

- React reconciliation is the process of comparing the virtual DOM with the actual DOM and updating the DOM.
- React reconciliation is an optimization technique that makes React efficient and fast.
- React reconciliation is done by React's Virtual DOM, which is a lightweight in-memory representation of the actual DOM.
- When the state or props of a component change, React creates a new virtual DOM representation of the
component.
- React then compares the new virtual DOM with the previous virtual DOM and updates the actual DOM only
where necessary.
- This process is called reconciliation, and it is done by React's reconciliation algorithm.

### The Diffing Algorithm
- The diffing algorithm is a key part of React reconciliation.
- It compares the virtual DOM with the actual DOM and updates the DOM where necessary.
- The diffing algorithm is based on a tree-like structure, where each node represents a component or
element.
- The algorithm starts at the root of the tree and recursively traverses the tree, comparing nodes and
updating the DOM where necessary.
- The diffing algorithm is optimized for performance and is a key part of what makes React efficient and
fast.


## Why the state value does not reset to it's initial value on re-render ?
- Because, React preserves the state between renders.
- This is one of the core principles of React's state management and is crucial for creating dynamic, interactive user interfaces.

## Why does not State Reset?
- **Purpose:**
    - The primary reason is to allow the component to maintain it's current "state" or condition between renders.
    - This persistance enables the user to interact with the component, and for component to reflect changes, without loosing the context or data.
- **Consistency:** 
    - If React reset the state on every re-render, it would be impossible to build interactive apps, as every action would revert the state to it's initial value, causing unpredictable behavior and poor user experience.

## Derived State in React
- **Derived State** is any state that can be computed based on other state or props.
- It is not stored directly in the component's state but is calculated when needed.
- This approach helps avoid duplication and keeps that state simpler and more manageable.
```javascript
const userCount = users.length
```

### Benefits of Derived State:
- **Avoid Redundancy:** By deriving values from existing state, you avoid storing redundant data.
- **Consistency:**  Ensure that derived values are always in sync with the underlying state or props.
- **Simplicity:** Reduces the complexity of State Management by minimizing the number of state variables.


## Lifting Up State
- Lifting up State in React is a common pattern used to manage shared state between multiple components.
- When two or more components need to share and sync data, the state must be managed at a common ancestor of those components.
- This process of moving the state to the closest common ancestor is known as "lifting up state."

### Why you need to Lifting up State in React?
1. **Sharing State Between Components:**
    - When multiple components need access to the same state, it's often necessary to lift the state up to their nearest common ancestor. 
    - This ensures that both components can read from and update the state. 
    - **Example:** Consider a form with a set of input fields (e.g., a name field and an email field) and a submit button. Both fields may need to access the same form data to be submitted correctly. By lifting the state up to the parent component, you can ensure that both input fields and the button have access to the same state.

2. **Avoid Prop Drilling:**
    - Lifting up state helps avoid the problem of "prop drilling," where you pass down props through multiple layers of components, even if those intermediate components don't need the data. 
    - By lifting the state to a higher component, you reduce the need to pass props through many levels, making the code more maintainable and easier to understand.

3. **Keeping Data in Sync:**
    - When the state is lifted to a common ancestor, you ensure that all child components view and update the same state. This keeps the data in sync across components, preventing discrepancies.
    - **Example:** Suppose you have a temperature conversion app with two components: one for Celsius and one for Fahrenheit. Both need to display the same temperature, just in different units. Lifting the state up ensures that when one temperature is updated, the other automatically reflects the change.

4. **Centralized State Management:**
    - Lifting up state centralizes the management of shared data, making it easier to debug and manage. 
    - You can control the state in one place, and all dependent components will update accordingly.