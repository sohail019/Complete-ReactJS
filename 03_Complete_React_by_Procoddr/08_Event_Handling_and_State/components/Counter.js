import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increaseValue = () => {
      setCounter(counter + 1);
      console.log("rendering")
    };

    // multiple state set
    // const increaseValue = ()=> {
    //   console.log(counter)
    //   setCounter((previousState) => previousState + 1)
    //   console.log(counter)
    //   setCounter((previousState) => previousState + 1)
    //   console.log(counter)
    // }


  return (
    <div style={{textAlign: "center"}}>
        <p>{counter}</p>
        <button onClick={increaseValue}>Increase Count</button>
    </div>
  )
}

export default Counter