import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {

  const [apiData, setApiData] = useState([])

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      setApiData(data)
    })
    .catch((err) => console.error("Error: ", err))
  }, [])

  return (
    <div className="container effect-container">
      <ul style={{backgroundColor: "black"}}>
        data: 
        {
          apiData.map((currData) => {
            console.log(currData)
            return <li key={currData.id}>
              {currData.title}
            </li>
          })
        }
      </ul>
    </div>
  );
};
