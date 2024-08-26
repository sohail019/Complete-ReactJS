import { useRef, useId, useState, forwardRef } from "react";

export const ForwardRef = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { username, password } = formData;

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
    <main>
      <div className="container">
        <h1>No More forwardRef() in React19</h1>
        <form onSubmit={handleFormSubmit}>
          <InputField label="Username" ref={usernameRef} />
          <InputField label="Password" ref={passwordRef} />
          <button>Submit</button>
        </form>
      </div>
      {isFormSubmitted && (
        <>
          <p>
            <span>Username:</span> {username}
          </p>
          <p>
            <span>Password:</span> {password}
          </p>
        </>
      )}
    </main>
  );
};

//! Before React 19
// const InputField = forwardRef((props, ref) => {
//     const id = useId()
//     return (
//         <>
//             <label htmlFor={id}>{props.label}</label>
//             <input type="text" ref={ref} />
//         </>
//     )
// })

// * React 19 Approach - No More forwardRef
const InputField = ({ label, ref }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" id="username" ref={ref} />
    </>
  );
};
