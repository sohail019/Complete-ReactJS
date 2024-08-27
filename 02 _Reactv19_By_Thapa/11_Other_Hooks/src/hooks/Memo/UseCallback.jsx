import { useState, memo, useCallback } from "react";


const Button = memo(({handleClick, children}) => {
    console.log(`Rendering Button: ${children}`);

    return (
        <button className={`text-black text-xl mb-4 py-2 px-5 ${children === "Increment" ? "bg-green-400" : "bg-red-400"} `} onClick={handleClick}>{children}</button>
    )
})

export const UseCallback = () => {

    const [count, setCount] = useState(0)

    // Memoize increment function
    // const handleIncrement =() => {
    //     console.log("Increment Inside")
    //     setCount((prev) => prev + 1)
    // }

    const handleIncrement = useCallback(() => {
        console.log("Increment Inside");
            setCount((prev) => prev + 1)
      },[])
    
    
    // Memoize decrement function
    // const handleDecrement =() => {
    //     setCount((prev) => prev - 1)
    // }

    const handleDecrement = useCallback(() => {
        console.log("Decrement Inside");
        setCount((prev) => prev - 1);
    }, [])

  return (
    <div className='p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white'>
        <h1 className='mb-4'>Count: {count}</h1>
        <Button handleClick={handleIncrement}>Increment</Button>
        <Button handleClick={handleDecrement}>Decrement</Button>
    </div>
  )
}
