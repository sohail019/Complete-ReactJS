import React from 'react';
import './App.css'

const App = () => {

  return (
    <> 
    <NetflixSeries />
    <NetflixSeries />
    <NetflixSeries />
    </>
  );
}

const NetflixSeries = () => {

  const name = "The Nurse"
  // const rating = 8.2
  const summary = "A new nurse at a hospital begins to suspect that her colleague's desire for attention might be tied to a series of patient deaths."
  
  const genre = ()=> {
    return "RomCom"
  }

  const age = 16 // underage, not available
  //? const age = 18 // watchnow


  // Solution 3
  let canWatch = "Not Avaiable"
  if(age>= 18) canWatch = "Watch Now"

  // Solution 4
  const canWatch1 = () => {
    if(age>= 18) return "Watch Now"
    return "Not Available"
  }

  return (
    <div>
    <div>
      <img
        src="./the-nurse-card-image.jpg"
        alt="The Nurse"
        width="40%"
        height="40%"
        />
    </div>
    {/* Hard Coding */}
    {/* <h2>Name: The Nurse</h2>
    <h3>Rating: 6.9</h3>

    <p>
      Summary : A new nurse at a hospital begins to suspect that her colleague's
      desire for attention might be tied to a series of patient deaths.
    </p> */}

    {/* Dynamic Values */}

    <h2>Name: {name}</h2>
    <h3>Rating: {5 + 3.2}</h3>
    <p>Summary: {summary}</p>

    <p>Genre: {genre()}</p>

    {/* Conditional Rendering */}

    {/* Solution 2 - using ternary operator */}
    {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}

    {/* Solution 3 - for complex conditions */}
    {/* <button>{canWatch}</button> */}

    {/* Solution 4 - by using function */}
    <button>{canWatch1()}</button>
  </div>
)

} 


export default App
