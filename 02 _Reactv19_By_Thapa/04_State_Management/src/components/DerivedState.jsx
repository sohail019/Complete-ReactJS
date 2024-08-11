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
      { name: "Alice", age: 20 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 22 },
      { name: "Drake", age: 32 },
    ]);

    // Derived State: Count of Users
    // console.log(usersWithState)
    const userCount = usersWithState.length


    // Derive State: Average age of Users
    const averageAge = usersWithState.reduce((acc, curr) => acc + curr.age, 0) / userCount
    // console.log(averageAge)

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
                <h3>Total Users: {userCount}</h3>
                <h3>Average Age: {averageAge}</h3>
            </div>
        </>
    )
}