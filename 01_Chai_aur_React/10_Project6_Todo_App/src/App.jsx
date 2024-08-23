import { useEffect } from "react";
import { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";
import { TodoProvider } from "./contexts";


function App() {

  const [todos, setTodos] = useState([])

  //todo: Add todo Functionality
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo} ,...prev])
  }

  // todo: Update todo functionalit

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...todo } : prevTodo
      )
    );
  };


  //todo: Delete Todo functionality
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  //todo: checkbox toggle complete functionality 
  const toggleComplete = (id) => {
      console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? {...prevTodo, 
        completed: !prevTodo.completed} : prevTodo))
  }

  //todo: clear all functionality
  const clearAll = () => {
    setTodos([])
  }

  //todo: Get item from localStorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) setTodos(todos)
  }, [])

  //todo: Set item in localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
 
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Todo App
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <button
            className="m-auto block mt-8 rounded px-3 py-1 bg-teal-600 text-white shrink-0"
            onClick={clearAll}
          >
            Clear All
          </button>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App
