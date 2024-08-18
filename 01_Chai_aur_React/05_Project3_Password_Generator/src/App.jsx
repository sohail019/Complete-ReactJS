import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //? useRef hook of password to store reference of password
  const passwordRef = useRef(null)

  //* password generator function that uses useCallback() hook to cache this func definition between re-renders
  const passwordGenerator = useCallback(() => {
    let pass = ""; //todo: password will be stored in this variable
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //* string contains alphabetical chars

    //? condition check if number is allowed, append numbers in str
    if (numAllowed) str += "0123456789";

    //? condition to check if char is allowed, append special chars in str
    if (charAllowed) str += "~`!@#$%^&*()_-+={}[]|:;<>,.?/";

    //* generate random password in loop
    for (let i = 1; i <= length; i++) {
      //? in char variable, we'll get random ascii number of characters
      let charNum = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(charNum); //* here, we have to find character at ascii number and append it in pass
    }

    setPassword(pass); //* in useState function
  }, [length, numAllowed, charAllowed, setPassword]);

  //todo: copy password to clipboard function
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  //todo: useEffect use to call function
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-5 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3 pb-5">Password Generator</h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={1}
              max={40}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length: ({length})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => setNumAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              className="cursor-pointer"
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
