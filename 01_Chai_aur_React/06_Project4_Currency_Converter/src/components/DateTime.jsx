import { useState, useEffect } from "react"


export const DateTime = () => {
  
    const [dateTime, setDateTime] = useState("")


    useEffect(() => {
      const intervalId = setInterval(() => {
        const date = new Date()
        const formatedDate = date.toLocaleDateString()
        const formatedTime = date.toLocaleTimeString()

        setDateTime(`${formatedDate} - ${formatedTime}`)
      }, 1000);
    
      return () => {
        clearInterval(intervalId)
      }
    }, [])

    return <h2 className="mt-6 text-center text-xl text-teal-900">Last Updated On: {dateTime}</h2>
    
}
