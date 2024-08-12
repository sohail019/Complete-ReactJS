import "./Todo.css";
import { useState } from "react";
import { DateTime } from "./DateTime";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo = () => {

    //* State for Task List
    const [task, setTask] = useState([])

    const handleFormSubmit = (inputValue) => {

        // ? to check if user enter empty value it should not add in a list
        if(!inputValue) return

        // ? to prevent duplicate value and the input field should be empty again
        if(task.includes(inputValue)) return

        //* Add task to state by using spread operator
        setTask((prevTask) => [...prevTask, inputValue])
    }

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
          <DateTime />
        </header>
        
        <TodoForm onTodoAdd={handleFormSubmit}/>

        <section className="myUnOrdList">
          <ul>
            {task.map((currTask, index) => {
              return (
                <TodoList key={index} data={currTask} onHandleDelete={handleDelete}/>
              );
            })}
          </ul>
        </section> 
          <button onClick={handleClearBtn} className="clear-btn">Clear All</button>
      </section>
    </>
  );
};