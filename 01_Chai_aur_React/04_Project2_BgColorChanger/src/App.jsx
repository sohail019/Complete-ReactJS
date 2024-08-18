import { useEffect, useState } from "react";
import { Button } from "./components/Button";

function App() {

  const [color, setColor] = useState(() => {
    return localStorage.getItem("backgroundColor" || "black")
  })

  useEffect(() => {
    localStorage.setItem("backgroundColor", color)
  }, [color])

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap top-1/2 inset-x-0 px-2 justify-center">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
         <Button setColor={setColor} backgroundColor="violet" label="Violet"/>
         <Button setColor={setColor} backgroundColor="indigo" label="Indigo"/>
         <Button setColor={setColor} backgroundColor="blue" label="Blue"/>
         <Button setColor={setColor} backgroundColor="green" label="Green"/>
         <Button setColor={setColor} backgroundColor="yellow" label="Yellow"/>
         <Button setColor={setColor} backgroundColor="orange" label="Orange"/>
         <Button setColor={setColor} backgroundColor="red" label="Red"/>
         <Button setColor={setColor} backgroundColor="olive" label="Olive"/>
         <Button setColor={setColor} backgroundColor="black" label="Black"/>
         <Button setColor={setColor} backgroundColor="purple" label="Purple"/>
         <Button setColor={setColor} backgroundColor="gray" label="Gray"/>
        </div>
      </div>
    </div>
  );
}

export default App;
