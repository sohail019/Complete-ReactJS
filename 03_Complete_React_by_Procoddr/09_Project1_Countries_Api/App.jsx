import React, {useState} from "react";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";
import { FilterMenu } from "./components/FilterMenu";
import {CountriesList} from "./components/CountriesList"
import "./App.css";

export const App = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <Searchbar setQuery={setQuery} />
          <FilterMenu />
        </div>

        <CountriesList query={query} />
      </main>
    </>
  );
};
