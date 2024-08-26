import { useBioContext } from "../hooks/Custom Hook/useBioContext";

export const About = () => {
//   const {myName, myAge} = useContext(BioContext);
  const {myName, myAge} = useBioContext()
  return (
    <>
      <h1>Hello About Component, My Name is {myName} and My Age is {myAge}</h1>
    </>
  );
};
