import React from "react";
import { Header } from "./components/Header";
import { Searchbar } from "./components/Searchbar";
import { FilterMenu } from "./components/FilterMenu";
import {CountriesList} from "./components/CountriesList"
import "./App.css";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <Searchbar />
          <FilterMenu />
        </div>

        <CountriesList />
      </main>
    </>
  );
};
