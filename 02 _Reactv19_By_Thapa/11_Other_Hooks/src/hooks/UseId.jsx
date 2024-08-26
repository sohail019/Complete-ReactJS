import { useId } from "react";
import "./hooks.css";

export const UseId = () => {

    //! this violates DRY principle
    // const usernameId = useId()
    // const passwordId = useId()

    //* Better Approach 
    const id = useId()
  
  return (
    <>
      <main>
        <div className="container">
          <h1>UseId Hook(Check Inspect)</h1>
          {/* //! this violates DRY principle */}
          {/* <form>
            <label htmlFor={usernameId}>Username</label>
            <input type="text" id={usernameId} />
            <label htmlFor={passwordId}>Password</label>
            <input type="password" id={passwordId}/>
            <button>Submit</button>
          </form> */}

          {/* //* Better Approach */}
          <form>
            <label htmlFor={id + "username"}>Username</label>
            <input type="text" id={id + "username"} />
            <label htmlFor={id + "password"}>Password</label>
            <input type="password" id={id + "password"} />
            <button>Submit</button>
          </form>
        </div>
      </main>
    </>
  );
};
