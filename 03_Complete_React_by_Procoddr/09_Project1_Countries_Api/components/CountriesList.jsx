import { useEffect, useState } from "react";
import { CountryCard } from "./CountryCard";

export const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data); // set the fetch data to state
      })
      .catch((error) => {
        console.log("Error Fetching Countries Data", error);
      });
  }, []);

  return (
    <div className="countries-container">
      {/* <CountryCard /> */}
      {countries.map((country, index) => {
      console.log(country.subregion)
        
        return (
          <CountryCard
            key={index}
            name={country.name.common}
            population={country.population}
            flag={country.flags.png}
            region={country.region}
            subregion={country.subregion}
            capital={country.capital}
            continent={country.continents}
            timezones={country.timezones}
          />
        );
      })}
    </div>
  );
};
