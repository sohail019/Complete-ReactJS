import { useState } from "react";
import { Searchbar } from "./Searchbar";
import { FilterMenu } from "./FilterMenu";
import { CountriesList } from "./CountriesList";
import { useWindowSize } from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";
import { ScrollToTop } from "./ScrollToTop";

export const Home = () => {
  const [query, setQuery] = useState("");

 const windowSize = useWindowSize()

  //! commenting useOutletContext() because now we are using ThemeContext
  // const [isDark] = useOutletContext()

  //? Theme Context
  // const [isDark] = useContext(ThemeContext)

  //* now by useTheme Custom Hook
  const [isDark] = useTheme()

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <ScrollToTop />
      {windowSize}
      <div className="search-filter-container">
        <Searchbar setQuery={setQuery} />
        <FilterMenu setQuery={setQuery} />
      </div>

      <CountriesList query={query} />
    </main>
  );
};
