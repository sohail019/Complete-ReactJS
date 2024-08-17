import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useWindowSize } from "../hooks/useWindowSize";
import { CountriesListShimmer } from "./CountriesListShimmer";
import "./CountryDetail.css";

export const CountryDetail = () => {
  const [country, setCountry] = useState({});
  const [notFound, setNotFound] = useState(false);

  const [isDark] = useTheme()

  const windowSize = useWindowSize()

  //todo: fetch country name parameter from URL
  // const countryName = new URLSearchParams(location.search).get('name')

  //todo: dynamic routing for country name url
  const params = useParams();

  //todo: pass data as props
  const { state } = useLocation();
  // console.log(params)
  const countryName = params.country;

  function updateCountryData(data) {
    setCountry({
      name: data.name.common || data.name,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      currencies: Object.values(data.currencies || {}) 
        .map((currency) => currency.name)
        .join(", "),
      languages: Object.values(data.languages || {}).join(", "),
      flag: data.flags.png,
      drivingSide: Object.values(data.car)[1],
      timezones: data.timezones.join(", "),
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setTimeout(() => {
        setCountry((prevState) => ({ ...prevState, borders }));
      });
    });
  }

  //todo: fetch country data

  useEffect(() => {
    if (state) {
      updateCountryData(state.data);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        // console.log(data);
        updateCountryData(data);
      })
      .catch((err) => setNotFound(true));
  }, [countryName]);

  if (notFound) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "10rem" }}>
        Country Not Found
      </h1>
    );
  }

  return country === null ? (
    <h1>Loading...</h1>
  ) : (
    <main className={`${isDark ? "dark" : ""}`}>
      {windowSize}
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        {country === null ? (
          <CountryDetailShimmer />
        ) : (
        <div className="country-details">
          <img src={country.flag} alt={country.data + "Flag"} />
          <div className="details-text-container">
            <h1>{country.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {country.nativeName || country.name}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population: {country.population}</b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {country.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {country.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {country.capital?.join(', ')}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {country.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {country.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {country.languages}</b>
                <span className="languages"></span>
              </p>
              <p>
                <b>Driving Side: {country.drivingSide}</b>
                <span className="driving-side"></span>
              </p>
              <p>
                <b>Time Zones: {country.timezones}</b>
                <span className="driving-side"></span>
              </p>
            </div>
            {country.borders && country.borders.length > 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {country.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>
                    {border}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        )}
      </div>
    </main>
  );
};
