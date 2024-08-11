import { useState } from "react"

const usersWithoutState = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 29},
    {name: "Charlie", age: 26},
    {name: "Drake", age: 21}
]


export const DerivedState = () => {

    //? Implement using useState hook

    const [usersWithState, setUsers] = useState([
      { name: "Alice", age: 25 },
      { name: "Bob", age: 29 },
      { name: "Charlie", age: 26 },
      { name: "Drake", age: 21 },
    ]);

    return (
        <>
            <div className="main-div">
                <h1>Users List Without State</h1>
                <ul>
                    {/* //! Implement without Using State */}
                    {
                        usersWithoutState.map((currElem, index) => {
                            return <>
                                <li key={index}>
                                    {currElem.name} - {currElem.age} year old
                                </li>
                            </>
                        })
                    }


                    {/* //* Implement Using State */}
                </ul>

                <h1>Users List With State</h1>
                <ul>
                        {
                         usersWithState.map((currElem, index) => {
                            return (
                                <>
                                <li key={index}>
                                    {currElem.name} - {currElem.age} year old
                                </li>
                                </>
                            )
                         })   
                        }
                </ul>
            </div>
        </>
    )
}