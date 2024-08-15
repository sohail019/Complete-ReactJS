import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export const CountryCard = ({
  name,
  population,
  flag,
  capital,
  region,
  continent,
  subregion,
  data,
}) => {
  return (
    <>
      <Link
        className="country-card"
        to={`/${name}`}
        state={{
          data,
        }}
      >
        <img src={flag} alt={name + "Flag"} />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: {population}</b>
          </p>
          <p>
            <b>Region: {region} </b>
          </p>
          <p>
            <b>Sub-region: {subregion}</b>
          </p>
          <p>
            <b>Capital: {capital}</b>
          </p>
          <p>
            <b>Continent: {continent}</b>
          </p>
        </div>
      </Link>
    </>
  );
};
