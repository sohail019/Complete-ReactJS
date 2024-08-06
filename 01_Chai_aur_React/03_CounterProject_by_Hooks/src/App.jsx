import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15

  let [counter, setCounter] = useState(10)

  const addValue = ()=> {
    if(counter<20){
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
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

export default App
