import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
