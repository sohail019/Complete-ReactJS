import { useState, useEffect } from "react";
import "./Todo.css";
import { MdCheck , MdDeleteForever } from "react-icons/md";


export const Todo = () => {

    //* State for input
    const [inputValue, setInputValue] = useState("")

    //* State for Task List
    const [task, setTask] = useState([])

    // * State for Date Time
    const [dateTime, setDateTime] = useState("")


    const handleFormSubmit = (e) => {
        // ! Preventing Form Default Behaviour
        e.preventDefault()

        // ? to check if user enter empty value it should not add in a list
        if(!inputValue) return

        // ? to prevent duplicate value and the input field should be empty again
        if(task.includes(inputValue)) {
            setInputValue("")
            return
        }

        //* Add task to state by using spread operator
        setTask((prevTask) => [...prevTask, inputValue])

        //? validation check for when user add task, the input field should be empty again
        setInputValue("")
    }


    const handleInputChange = (value) => {
        setInputValue(value)
    }

    //Add Date

    // const newDate = new Date();
    // const formatedDate = newDate.toLocaleDateString()

    //Add Time
    // const formatedTime = newDate.toLocaleTimeString()
    //! the above works but in React we have to render page by using state


    // setInterval(() => {
    //     const date = new Date();
    //     const formatedDate = date.toLocaleDateString()
    //     const formatedTime = date.toLocaleTimeString()

    //     setDateTime(`${formatedDate} - ${formatedTime}`)
    // }, 1000)
    // ! the above one works but it can leads to memory leak problem
    // ? that's why we have to clear interval also

    // * we can use useEffect

    useEffect(() => {
      const interval = setInterval(() => {
        const date = new Date();
        const formatedDate = date.toLocaleDateString();
        const formatedTime = date.toLocaleTimeString();

        setDateTime(`${formatedDate} - ${formatedTime}`);
      }, 1000);
    
      return () => clearInterval(interval)
    }, [])
    

    //? Implement logic on how to delete item from toDo

    const handleDelete = (value) => {
      // console.log(task)
      // console.log(value)
      
      const updatedTask = task.filter( (currTask) => currTask !== value)
      setTask(updatedTask)
    }

    const handleClearBtn = () => {
      setTask([])
    }

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>ToDo App</h1>
          <h2 className="date-time">{dateTime} </h2>
        </header>
        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                name="Todo Input"
                className="todo-input"
                autoComplete="off"
                onChange={(e) => handleInputChange(e.target.value)}
                value={inputValue}
              />
            </div>
            <div>
              <button className="todo-btn">Add Task</button>
            </div>
          </form>
        </section>

        <section className="myUnOrdList">
          <ul>
            {task.map((currTask, index) => {
              return (
                <>
                  <li key={index} className="todo-item">
                    <span className="todo-item">{currTask}</span>
                    <button className="check-btn">
                      <MdCheck />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(currTask)}
                    >
                      <MdDeleteForever />
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        </section>
       
          <button onClick={handleClearBtn} className="clear-btn">Clear All</button>
      </section>
    </>
  );
};
