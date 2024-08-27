import { useReducer } from "react";

export const UseReducer = () => {
  //! useState so far
  // const [count, setCount] = useState(0)

  const reducer = (state, action) => {
    console.log(action)

    if(action.type === "INCREMENT") {
      return state + 1
    }
    if(action.type === "DECREMENT") {
      return state - 1
    }
  }

  //* useReducer
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="p-4 h-lvh flex flex-col justify-center items-center">
      <h1>UseReducer : {count}</h1>
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
    </div>
  );
};
