import { useState } from "react";

export const TodoForm = ({ onTodoAdd }) => {
  //* State for input
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue({id: value, content: value, checked: false});
  };

  const handleFormSubmit = (event) => {
    // ! Preventing Form Default Behaviour
    event.preventDefault();

    onTodoAdd(inputValue);

    //? validation check for when user add task, the input field should be empty again
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              name="Todo Input"
              className="todo-input"
              autoComplete="off"
              onChange={(e) => handleInputChange(e.target.value)}
              value={inputValue.content}
            />
          </div>
          <div>
            <button className="todo-btn">Add Task</button>
          </div>
        </form>
      </section>
    </>
  );
};
