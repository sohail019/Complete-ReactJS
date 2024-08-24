import { useState } from "react";

//* Using Object State with Spread Operator
//todo  Tasks:
//? Refactor the registration form to use a single object (formData) as the initial state.
//? Update input fields to use object properties.
//? Use the spread operator to update the form data state efficiently.
//? Discuss the benefits of using object state over multiple state variables.

export const RealLifeRegistration = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
    });

const {firstName, lastName, email, password, phoneNumber} =  user

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({...prev, [name]: value}))
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // const {firstName, lastName, email,password, phoneNumber} = user

    const formData = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };

    console.log(formData);
  };

  return (
    <>
      <main>
        <section
          className="summary"
          style={{ textAlign: "center", marginTop: "30px" }}
        >
          <p>
            Hello, my name is
            <span>
              {firstName} {lastName}
            </span>
            . My email address is <span>{email}</span> and my phone number is
            <span>{phoneNumber}</span>.
          </p>
        </section>
        <form onSubmit={handleFormSubmit}>
          <div className="container">
            <h1>Sign Up</h1>
            {/* <p>Please fill in this form to create an account.</p> */}

            <label htmlFor="firstName">
              <b>First Name</b>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter firstName"
              required
              value={firstName}
              onChange={handleInputChange}
            />

            <label htmlFor="lastName">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter lastName"
              required
              value={lastName}
              onChange={handleInputChange}
            />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              value={email}
              onChange={handleInputChange}
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              minLength="8"
              value={password}
              onChange={handleInputChange}
            />

            <label htmlFor="phone">
              <b>Phone Number</b>
            </label>

            <input
              type="phone"
              name="phoneNumber"
              placeholder="9876543211"
              maxLength="10"
              required
              value={phoneNumber}
              onChange={handleInputChange}
            />

            <p>
              By creating an account you agree to our
              <a href="#" style={{ color: "dodgerblue" }}>
                Terms & Privacy
              </a>
            </p>

            <div className="clearfix">
              <button type="submit" className="btn">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};
