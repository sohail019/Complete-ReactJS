import React from 'react'
import { useState, useEffect } from "react";

export const ReactUseEffect = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1);
  };

  //todo: Example 1: Basic useEffect usage - when component mounts, useEffect runs once!
  useEffect(() => {
    console.log("Hello Use Effect Example 1");
  }, []);

  //todo: Example 2: useEffect with dependency array
  useEffect(() => {
    console.log("Count is", count);
  }, [count])

  //todo: Example 3: Advanced useEffect Usage
  useEffect(() => {
      setInterval(() => {
        const updatedTime = new Date()
        setTime(updatedTime.toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <div className="container effect-container">
      <h1>useEffect Hook</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

      <h2>Date: {time}</h2>
    </div>
  );
}
