# Hooks

## useState Hook

- The `useState` hook is used to declare state variables in functional components. 
- It allows you to add state management without converting the component to a class.

### Syntax
```javascript
const [state, setState] = useState(initialValue);
```

- **`state`:** The current state value.
- **`setState`:** A function that updates the state. It takes the new state value as an argument and schedules a re-render of the component.

### State Management:
- When you call `setState`, React schedules a re-render of the component with the updated state value.
- The component function runs again, and `useState` provides the updated state value.
- State updates are asynchronous, meaning that multiple state updates may be batched for performance optimization.

### Functional Updates: 

You can use a function inside `setState` to access the previous state value if needed:
```javascript
setCounter(prevCounter => prevCounter + 1);
```
This ensures that the update is based on the most recent state value.

---

## Code Explanation

### Importing `useState`
```javascript
import { useState } from 'react';
```
- **Purpose:** The `useState` hook is imported from React to manage state in functional components. It provides a way to add stateful logic to a component without converting it to a class.

### Component Definition
```javascript
function App() {
  // let counter = 15

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter <= 20) {
      setCounter(counter++);
    }
  }

  const removeValue = () => {
    if (counter >= 0) {
      setCounter(counter--);
    }
  }

  return (
    <>
      <h1>Chai aur React | Sohail Shaikh</h1>

      <h2>Count Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>

      <footer>{counter}</footer>
    </>
  );
}
```

**`useState` Hook:**

```javascript
let [counter, setCounter] = useState(10);
```
- **Initial State:** The `useState` hook is called with an initial value of `10`. This initializes the `counter` state variable to `10`.
- **State Variables:** The hook returns an array containing the current state (`counter`) and a function to update the state (`setCounter`).

### State Update Functions:

**`addValue` Function:**
```javascript
const addValue = () => {
  if (counter < 20) {
    setCounter(counter + 1);
  }
}
```
- **Condition:** The function checks if `counter` is less than `20`.
- **Update State:** It updates the state by incrementing the `counter`. `setCounter(counter + 1)`

**`removeValue` Function:**

```javascript
const removeValue = () => {
  if (counter > 0) {
    setCounter(counter - 1);
  }
}
```
- **Condition:** The function checks if counter is greater than 0.
- **Update State:** It updates the state by decrementing the counter. `setCounter(counter - 1)`

**Render:**

- The component returns a fragment containing:
    - A header displaying "Chai aur React | Sohail Shaikh".
    - The current counter value displayed in an h2 element.
    - Two buttons to add or remove the counter value.
    - A footer displaying the current counter value.

    