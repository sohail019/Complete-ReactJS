import { useContext } from "react";
import { BioContext } from "./Context";

export const About = () => {
  const {myName, myAge} = useContext(BioContext);
  return (
    <>
      <h1>Hello About Component, My Name is {myName} and My Age is {myAge}</h1>
    </>
  );
};
