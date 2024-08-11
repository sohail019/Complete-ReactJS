import { useState } from "react";


// * This parent component should hold the state inputValue and the state handler setInputValue
export const ParentComponent = () => {

    // ? here state
    const [inputValue, setInputValue] = useState("")

    // handle input
    const handleInput = (e)=> {
        setInputValue(e.target.value)
    }

  return (
    <>
      {/* //* Pass input value and handleInput function to InputComponent as Props */}
      <InputComponent inputValue={inputValue} setInputValue={handleInput} />

      {/* //* Pass input value DisplayComponent as Props */}
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};


export const InputComponent = ({inputValue, setInputValue}) => {

    //? firsly creating state here
    // const [inputValue, setInput] = useState("")

    // const handleInput = (e) => {
    //     // console.log(e.target.value)
    //     setInput(e.target.value)
    // }
    //! Commenting down because from this component we can't pass inputValue to another component, that's why lifting this state to parent component

    return (
        <>
            <div className="main-div">
                <input type="text" name="name" value={inputValue} onChange={setInputValue}/>
            </div>
        </>
    )
}


export const DisplayComponent = ({inputValue}) => {
    return (

        <>
            <h2>The Current Input Value is: {inputValue}</h2>
        </>
    )
}