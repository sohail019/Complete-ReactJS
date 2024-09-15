import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AppLayout = () => {
  const getActiveColor = ({ isActive }) => {
    return {
      color: isActive ? "#535bf2" : "grey",
    };
  };
  return (
    <>
      <Header getActiveColor={getActiveColor} />
      <Outlet />
      <Footer getActiveColor={getActiveColor} />
    </>
  );
};
