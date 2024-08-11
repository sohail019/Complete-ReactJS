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
    </>
  );
};
