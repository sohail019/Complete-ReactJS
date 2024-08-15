import { useState } from "react";
import { Searchbar } from "./Searchbar";
import { FilterMenu } from "./FilterMenu";
import { CountriesList } from "./CountriesList";
import { useOutletContext } from "react-router-dom";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useOutletContext()

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
