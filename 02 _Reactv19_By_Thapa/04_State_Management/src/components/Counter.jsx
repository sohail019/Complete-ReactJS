import { useState } from "react";
import "../index.css";
import styles from "../components/Counter.module.css"

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const handleDecrementCount = () => {
    if(count > 0){
        setCount(count - 1);
    }
  };

  return (
    <>
      <div className="main-div">
        <h1>{count}</h1>
        <div className={styles.btn}>
          <button onClick={handleIncrementCount}>Increment</button>
          <button onClick={handleDecrementCount}>Decrement</button>
        </div>
      </div>

      <ChildComponent count={count}/>
    </>
  );
};


//? Create one child component to see how state works
//! The child component is rendered when the parent component is rendered. The child component is not re-render when the parent component is re-rendered. However, the child component will be re-rendered when the state of the parent component changes. 

const ChildComponent = (props) => {
    console.log("Child component rendered")    
    return (
        <>
            <div className="main-div">
                <h1>Child Component - {props.count}</h1>
            </div>
        </>
    )
}

//* In this case, the state of the parent component is changed when the handleIncrementCount or handleDecrementCount function is called. So, the child component will be re-rendered when the handleIncrementCount or handleDecrementCount function is called.