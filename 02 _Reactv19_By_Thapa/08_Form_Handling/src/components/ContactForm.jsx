import { useState } from "react";

export const ContactForm = () => {
  //todo: Approach 1
  // const [fullName, setFullName] = useState("")
  // const [email, setEmail] = useState("")
  // const [message, setMessage] = useState("")

  // const handleInputChange = (e) => {
  //   const {name, value} = e.target

  //   switch(name){
  //     case "fullName":
  //       setFullName(value)
  //       break
  //     case "email":
  //       setEmail(value)
  //       break
  //     case "message":
  //       setMessage(value)
  //   }
  // }

  //todo: Approach 2
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const { fullName, email, message } = contactData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      message,
    };

    console.log(formData);

    setContactData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <main>
      <section
        className="summary"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        {/* {isLoggedIn && (
          <p>
            Hello,<span>{username}</span>
          </p>
        )} */}
      </section>
      <div className="container">
        <div className="card">
          <h1>Contact Form</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              autoComplete="off"
              value={fullName}
              onChange={handleInputChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              type="password"
              name="message"
              required
              autoComplete="off"
              rows="6"
              value={message}
              onChange={handleInputChange}
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </main>
  );
};
