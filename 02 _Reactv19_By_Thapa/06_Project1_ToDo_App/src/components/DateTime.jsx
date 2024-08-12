import { useState, useEffect } from "react";

export const DateTime  = () => {
  // * State for Date Time
  const [dateTime, setDateTime] = useState("");

  //Add Date

  // const newDate = new Date();
  // const formatedDate = newDate.toLocaleDateString()

  //Add Time
  // const formatedTime = newDate.toLocaleTimeString()
  //! the above works but in React we have to render page by using state

  // setInterval(() => {
  //     const date = new Date();
  //     const formatedDate = date.toLocaleDateString()
  //     const formatedTime = date.toLocaleTimeString()

  //     setDateTime(`${formatedDate} - ${formatedTime}`)
  // }, 1000)
  // ! the above one works but it can leads to memory leak problem
  // ? that's why we have to clear interval also

  // * we can use useEffect

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formatedDate = date.toLocaleDateString();
      const formatedTime = date.toLocaleTimeString();

      setDateTime(`${formatedDate} - ${formatedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2 className="date-time">{dateTime} </h2>;
}