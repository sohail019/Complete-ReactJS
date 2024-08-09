import React from "react";
import seriesData from "../api/seriesData.json";
import {Card} from "./Card"

//? Named Export

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((currentElement) => <Card key={currentElement.id} data={currentElement}/>
      )}
    </ul>
  );
};

// Default Export
export default NetflixSeries;

// Make Header
export const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#212121",
        color: "white",
        padding: "10px",
        margin: "10px 0px",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "10px",
          listStyleType: "none",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Watch Now</li>
      </ul>
    </div>
  );
};

// Make Footer
export const Footer = () => {
  return <p>@CopyRight 2024. Sohail. All Rights Reserved</p>;
};
