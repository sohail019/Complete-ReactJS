import { useBioContext } from "../hooks/Custom Hook/useBioContext";

export const Home = () => {
  //   const {myName, myAge} = useContext(BioContext);
  const { myName, myAge } = useBioContext();
  return (
    <>
      <h1>
        Hello Home Component, My Name is {myName} and My Age is {myAge}
      </h1>
    </>
  );
};
