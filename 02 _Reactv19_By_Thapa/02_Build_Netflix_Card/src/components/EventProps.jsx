

//* Parent Component
export const EventProps = () => {

    const handleWelcomeUser = (user) => {
        alert(`Welcome ${user}`)
    }

    const handleHover = () => {
        alert("Hey, Thanks for hovering me!")
    }

    return (

        <>
            <WelcomeUser onClick={() => handleWelcomeUser("Sohail")} onMouseEnter={handleHover}/>
        </>
    )
}

//* create child component

export const WelcomeUser = (props) => {

    const {onClick, onMouseEnter} = props

    const handleGreeting = () => {
        console.log("Hello")
        onClick();
    }

    return (
        <>
            <button onClick={onClick}>Click Me</button>
            <button onMouseEnter={onMouseEnter}>Hover Me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}