import "./App.css";
import { ForwardRef } from "./components/ForwardRef";
import { ParentComponent } from "./components/PropDrilling";
import { About } from "./contexts/About";
import { BioProvider } from "./contexts/Context";
import { Home } from "./contexts/Home";
import { UseId } from "./hooks/UseId";
import { UseRef } from "./hooks/UseRef";

function App() {
  return (
    <>
      {/* <UseRef /> */}
      {/* <ForwardRef /> */}
      {/* <UseId /> */}
      {/* <ParentComponent /> */}

      {/* //* Context API */}

      <BioProvider>
        <Home />
        <About />
      </BioProvider>
    </>
  );
}

export default App;
