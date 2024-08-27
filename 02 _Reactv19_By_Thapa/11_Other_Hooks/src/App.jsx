import { ForwardRef } from "./components/ForwardRef";
import { ParentComponent } from "./components/PropDrilling";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { About } from "./contexts/About";
import { BioProvider } from "./contexts/Context";
import { Home } from "./contexts/Home";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ReactMemo } from "./hooks/Memo/ReactMemo";
import UseMemo from "./hooks/Memo/UseMemo";
import { UseId } from "./hooks/UseId";
import { UseReducer } from "./hooks/UseReducer";
import { UseRef } from "./hooks/UseRef";

function App() {
  return (
    <>
      {/* <UseRef /> */}
      {/* <ForwardRef /> */}
      {/* <UseId /> */}
      {/* <ParentComponent /> */}

      {/* //* Context API */}

      {/* <BioProvider>
        <Home />
        <About />
      </BioProvider> */}

      {/* //* Theme Switcher */}
      {/* <ThemeProvider >
        <ThemeSwitcher />
      </ThemeProvider> */}

      {/* <UseReducer /> */}

      {/* //* Memoization */}
      <ReactMemo />
      {/* <UseMemo /> */}
    </>
  );
}

export default App;
