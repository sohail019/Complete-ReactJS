import "./App.css";
import { ForwardRef } from "./components/ForwardRef";
import { ParentComponent } from "./components/PropDrilling";
import { UseId } from "./hooks/UseId";
import { UseRef } from "./hooks/UseRef";

function App() {
  return (
    <>
      {/* <UseRef /> */}
      {/* <ForwardRef /> */}
      {/* <UseId /> */}
      <ParentComponent />
    </>
  )
}

export default App;
