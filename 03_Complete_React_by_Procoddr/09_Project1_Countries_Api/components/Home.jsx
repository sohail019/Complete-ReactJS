import { useContext, useState } from "react";
import { Searchbar } from "./Searchbar";
import { FilterMenu } from "./FilterMenu";
import { CountriesList } from "./CountriesList";
import { ThemeContext } from "../contexts/ThemeContext";

export const Home = () => {
  const [query, setQuery] = useState("");

  //! commenting useOutletContext() because now we are using ThemeContext
  // const [isDark] = useOutletContext()

  //* Theme Context
  const [isDark] = useContext(ThemeContext)

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <Searchbar setQuery={setQuery} />
        <FilterMenu />
      </div>

      <CountriesList query={query} />
    </main>
  );
};
