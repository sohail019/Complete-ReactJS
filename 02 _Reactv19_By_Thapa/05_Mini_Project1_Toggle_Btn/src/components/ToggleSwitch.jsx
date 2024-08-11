import { useState } from "react";
import "./ToggleSwitch.css"

export const ToggleSwitch = () => {

    const [toggleValue, setToggleValue] = useState(false) 

    let mode = toggleValue ? "Dark Mode" : "Light Mode"
     
    const handleToggleSwitch = ()=> {
        setToggleValue(!toggleValue)

        if(toggleValue) {
         console.log("Light")
         document.body.style.backgroundColor = "#fff"
         
        } else{
            console.log("Dark")
        document.body.style.backgroundColor = "#212121"
        }
    }

    const checkToggle = toggleValue ? "on" : "off";
    const toggleBgColor = {
        backgroundColor: toggleValue ? "#4caf50" : "#f44336"
    }
    return (
      <>
        <div
          className="toggle-switch"
          style={{ toggleBgColor }}
          onClick={handleToggleSwitch}
        >
          <div className={`switch ${checkToggle}`}>
            <span className="switch-state">{checkToggle}</span>
          </div>
        </div>
        <h3 className={mode === "Light Mode" ? "value-light" : "value-dark"}>
          {mode}
        </h3>
      </>
    );
}