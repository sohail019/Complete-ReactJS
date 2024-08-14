import { useState } from "react";
import { Searchbar } from "./Searchbar";
import { FilterMenu } from "./FilterMenu";
import { CountriesList } from "./CountriesList";

export const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="search-filter-container">
        <Searchbar setQuery={setQuery} />
        <FilterMenu />
      </div>

      <CountriesList query={query} />
    </main>
  );
};
