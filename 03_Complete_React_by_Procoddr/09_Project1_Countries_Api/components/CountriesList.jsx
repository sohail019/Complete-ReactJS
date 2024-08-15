import { useEffect, useState } from "react";
import { CountriesListShimmer } from "./CountriesListShimmer";
import { CountryCard } from "./CountryCard";

export const CountriesList = ({query}) => {
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

  const filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(query))
  // console.log(filteredCountries.map((country) => country.name.common))

  if(!countries.length) {
    return <CountriesListShimmer />;
  }

  return (
    <> 
      <div className="countries-container">
        {filteredCountries.map((country, index) => {
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
              data={country}
            />
          );
        })}
      </div>
    </>
  );
};
