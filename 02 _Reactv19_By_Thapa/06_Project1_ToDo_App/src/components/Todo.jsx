import "./Todo.css";
import { useState } from "react";
import { DateTime } from "./DateTime";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export const Todo = () => {
  //* State for Task List
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    // ? to check if user enter empty value it should not add in a list
    if (!content) return;

    // ? to prevent duplicate value and the input field should be empty again
    // if(task.includes(inputValue)) return

    const ifToDoContentMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifToDoContentMatched) return;

    //* Add task to state by using spread operator
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  //? Implement logic on how to delete item from toDo

  const handleDelete = (value) => {
    // console.log(task)
    // console.log(value)
    const updatedTask = task.filter((currTask) => currTask.content !== value);
    setTask(updatedTask);
  };

  //? Implement logic on how to check/uncheck item from todo

  const handleCheck = (content) => {
     
    const updatedTask = task.map( (currTask) => {
      if(currTask.content === content) {
        return {...currTask, checked: !currTask.checked}
      } else{
        return currTask
      }
    })

    setTask(updatedTask)
  }

  // ? Implement Logic on how to clear all the items
  const handleClearBtn = () => {
    setTask([]);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>ToDo App</h1>
          <DateTime />
        </header>

        <TodoForm onTodoAdd={handleFormSubmit} />

        <section className="myUnOrdList">
          <ul>
            {task.map((currTask) => {
              return (
                <TodoList
                  key={currTask.id}
                  data={currTask.content}
                  checked={currTask.checked}
                  onHandleDelete={handleDelete}
                  onHandleChecked={handleCheck}
                />
              );
            })}
          </ul>
        </section>
        <button onClick={handleClearBtn} className="clear-btn">
          Clear All
        </button>
      </section>
    </>
  );
};
