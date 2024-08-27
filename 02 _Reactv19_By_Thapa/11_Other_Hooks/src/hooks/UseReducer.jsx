import { useReducer } from "react";

export const UseReducer = () => {
  //! useState so far
  // const [count, setCount] = useState(0)

  const initialState = {
    count: 0,
    inc: 2,
    dec: 2
  }

  const reducer = (state, action) => {
    console.log(action)
    const { count, inc, dec } = state;

    //! using if is not good approach
    // if(action.type === "INCREMENT") {
    //   return state + 1
    // }
    // if(action.type === "DECREMENT") {
    //   return state - 1
    // }
    // if(action.type === "RESET"){
    //   return state = 0
    // }

    //* we should use switch statement

    switch(action.type) {
      case "INCREMENT":
        return {...state, count: count + inc}
      case "DECREMENT":
        return { ...state, count: count - dec };
      case "RESET":
        return { ...state, count: 0 };
    }

  }

  //* useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="p-4 h-lvh flex flex-col justify-center items-center">
      <h1>UseReducer : {state.count}</h1>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="bg-teal-500 hover:bg-teal-600 w-full text-white rounded-md mt-4 p-4"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="bg-teal-500 hover:bg-teal-600 w-full text-white rounded-md mt-4 p-4"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="bg-teal-500 hover:bg-teal-600 w-full text-white rounded-md mt-4 p-4"
      >
        Reset
      </button>
    </div>
  );
};
