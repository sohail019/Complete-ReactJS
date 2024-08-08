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
  </div>
)

} 


export default App
