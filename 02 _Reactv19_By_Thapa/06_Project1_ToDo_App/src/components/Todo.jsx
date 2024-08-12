import { useState } from "react";
import "./Todo.css";
import { MdCheck , MdDeleteForever } from "react-icons/md";


export const Todo = () => {

    //* State for input
    const [inputValue, setInputValue] = useState("")

    //* State for Task List
    const [task, setTask] = useState([])

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
  return (
    <>
      <section className="todo-container">
        <header>
          <h1>ToDo App</h1>
          {/* <h2>{inputValue}</h2> */}
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
                {
                    task.map((currTask, index) => {
                        return (
                          <li key={index} className="todo-item">
                            <span className="todo-item">{currTask}</span>
                            <button className="check-btn">
                              <MdCheck />
                            </button>
                            <button className="delete-btn">
                              <MdDeleteForever />
                            </button>
                          </li>
                        );
                    })
                }
            </ul>
        </section>
      </section>
    </>
  );
};
