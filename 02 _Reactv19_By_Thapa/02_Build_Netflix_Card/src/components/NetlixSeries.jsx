import React from "react";
import seriesData from "../api/seriesData.json";
import { Card } from "./Card";
import NetflixLogo from "../assets/netflix.png";
// import "../index.css";
import styles from "../components/Netflix.module.css";


//? Named Export

function NetflixSeries() {
  return (
    <ul className={`${styles.grid} ${styles["grid-three-cols"]}`}>
      {seriesData.map((currentElement) => (
        <Card key={currentElement.id} data={currentElement} />
      ))}
    </ul>
  );
}

// Default Export
export default NetflixSeries;

// Make Header
export const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.header_img} src={NetflixLogo} alt="Netflix Logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Watch Now</li>
      </ul>
    </div>
  );
};

// Make Footer
export const Footer = () => {
  return (
    <p className={styles.footer}>
      @CopyRight 2024. Sohail. All Rights Reserved
    </p>
  );
};
