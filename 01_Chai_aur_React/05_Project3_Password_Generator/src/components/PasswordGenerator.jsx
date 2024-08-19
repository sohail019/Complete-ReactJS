import { useCallback, useEffect, useState } from "react";
import { PasswordInput } from "./PasswordInput"
import { PasswordOptions } from "./PasswordOptions"

export const PasswordGenerator = () => {

     const [length, setLength] = useState(8);
     const [numAllowed, setNumAllowed] = useState(false);
     const [charAllowed, setCharAllowed] = useState(false);
     const [password, setPassword] = useState("");

     const passwordGenerator = useCallback(() => {
       let pass = "";
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

       if (numAllowed) str += "0123456789";
       if (charAllowed) str += "~`!@#$%^&*()_-+={}[]|:;<>,.?/";

       for (let i = 1; i <= length; i++) {
         let charNum = Math.floor(Math.random() * str.length);
         pass += str.charAt(charNum);
       }

       setPassword(pass);
     }, [length, numAllowed, charAllowed]);

     const copyPasswordToClipboard = useCallback(() => {
       window.navigator.clipboard.writeText(password);
     }, [password]);

      useEffect(() => {
        passwordGenerator();
      }, [length, numAllowed, charAllowed, passwordGenerator]);


  return (
    <div className="shadow-md rounded-xl px-40 py-24 text-white bg-[#1E293B]">
      <h1 className="text-white text-center my-3 pb-5">Password Generator</h1>
      <PasswordInput password={password} onCopy={copyPasswordToClipboard} />
      <PasswordOptions
        length={length}
        numAllowed={numAllowed}
        charAllowed={charAllowed}
        onLengthChange={setLength}
        onNumToggle={() => setNumAllowed((prev) => !prev)}
        onCharToggle={() => setCharAllowed((prev) => !prev)}
      />
    </div>
  );
}
