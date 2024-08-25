import { useEffect } from "react";
import { useState } from "react";

export const CleanUp = () => {
  const [count, setCount] = useState(0)

  //! Not to use this setInterval in react
  // setInterval(() => {
  //   setCount(count + 1)
  // }, 1000);

  //* Better approach to use
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000);

    return () => clearInterval(intervalId) 
  }, [])

  return (
    <div className="container effect-container">
      <div className="counter">
        <p>My Count</p>
        <div className="odometer" id="odometer">
          <h1>{count}</h1>
        </div>
        <h3 className="title">
          Youtube Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
  );
};