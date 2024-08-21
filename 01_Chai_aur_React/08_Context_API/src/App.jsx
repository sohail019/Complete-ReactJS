import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Header />
      <Outlet />
    </UserContextProvider>
  );
}

export default App;
