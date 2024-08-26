import { useState, useRef } from "react";
import "./hooks.css";

export const UseRef = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  //todo: Getting reference of elements through vanilla JS
  // const username = document.getElementById("username")
  // const password = document.getElementById("password")

  // console.log(username.value, password.value)
  // const handleFormSubmit = (e) => {
  //     e.preventDefault()
  // }

  //todo: Now through React useRef hook

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormData({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });

    setIsFormSubmitted(true);
  };
  return (
    <>
      <main>
        <div className="container">
          <h1>UseRef Hook</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={usernameRef} />
            <label htmlFor="username">Password</label>
            <input type="password" id="password" ref={passwordRef} />
            <button>Submit</button>
          </form>
        </div>
        {isFormSubmitted && (
          <>
            <p>
              <span>Username:</span>
              {username}
            </p>
            <p>
              <span>Password:</span>
              {password}
            </p>
          </>
        )}
      </main>
    </>
  );
};
