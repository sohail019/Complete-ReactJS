import { useState } from "react";

export const LoginForm = () => {

    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    })

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const {username, password} = userLogin

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setUserLogin((prev) => ({...prev, [name]: value}))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const formData = {
            username, 
            password
        }

        console.log(formData);

        setIsLoggedIn(true)
    }

  return (
    <>
      <main>
        <section
          className="summary"
          style={{ textAlign: "center", marginTop: "30px" }}
        >
            {
                isLoggedIn && <p>
            Hello,<span>{username}</span>
          </p>
            }
          
        </section>
        <div className="container">
          <div className="card">
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                required
                autoComplete="off"
                value={username}
                onChange={handleInputChange}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                required
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
              />

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
