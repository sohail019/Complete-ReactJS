import './App.css'
import {Counter} from "./components/Counter"
import { DerivedState } from './components/DerivedState'
import { ParentComponent } from './components/LiftTheStateUp'

function App() {

  return (
    <>
      <Counter />
      <SiblingComponent />

      <hr />
      <DerivedState/>

      <hr />
      <ParentComponent /> 
    </>
  )
}

export default App


//? Let's create one sibling component here to see how state works

//! When button is clicked in counter, it updates the state of the counter component. This state change triggers a re-render of the counter component. 

const SiblingComponent = () => {
  
  console.log("Sibling Component rendered")
  
  return (
    <>
      <div className='main-div'>
      <h1>Sibling Component</h1>
      </div>
    </>

)
}
//* However, the sibling component does not re-render because it does not depend on the state of the counter component. It only depends on the props passed to it by the parent component, which are not updated when the counter component re-renders.