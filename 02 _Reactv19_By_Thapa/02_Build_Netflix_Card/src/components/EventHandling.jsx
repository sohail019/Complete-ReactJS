import "./Event.css"


export const EventHandling = () => {

    const handleButtonClick = (event)=> {
        console.log(event)
        // console.log(event.target)
        // console.log(event.type)
        alert("Hey, I am onClick Event")
    }

    const handleWelcomeUser = (user) => {
        // const username = prompt("Enter Your Name: ")
        alert(`Hey, ${user} Welcome`)
    }

    return (
        <>
            {/* //? function component with named functions */}
            {/* Remember how we haven't called this function, if you call this function here then it will run without even clicking. You just need to pass reference and not call here */}
            <button onClick={handleButtonClick}>Click Me</button>
            
            {/* //? Using fat arrow function, here we cannot get SyntheticBasedEvent */}
            {/* In React, event handlers receive the event object as an argument by default. However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function. This is because the arrow function creates a new function and calls handler without passin any arguments */}
            <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>


            {/* //? Inline Event Handler */}
            {/* //! This is not recommended, because it is not reusable */}
            <button onClick={(event) => {
                alert("Hey, I am inline onClick Event")
                console.log(event)
            }}>Inline Event</button>


            {/* //? Function Component with inline Arrow functions */}
            <button onClick={() => alert("Hey, I am inline Arrow Function")}>Inline Arrow func</button>


            {/* //? Passing Arguments to Event Handlers */}
            {/* <button onClick={handleWelcomeUser}>Click to Welcome</button> */}
            <button onClick={() => handleWelcomeUser("Sohail")}>Click to Welcome</button>
            <button onClick={() => handleWelcomeUser("Salman")}>Click to Welcome</button>
        </>
    )
}