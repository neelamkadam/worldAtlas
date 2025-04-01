import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../../App.css";
import { NavLink } from "react-router-dom";

const ContryCard = ({ country }) => {
  const { name, flags, capital, region, population } = country;
  // console.log(capital.join("").length);
  return (
    <>
      <div className="card">
        <div className="container-card bg-blue-box">
          <img className="flag-img" src={flags.svg} alt="Country Flag" />
          <p className="card-title">
            {name.common.length > 10
              ? name.common.slice(0, 10) + "..."
              : name.common}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {capital.join("").length > 10
              ? capital.join("").slice(0, 10) + "..."
              : capital}
          </p>
          <p>
            <span className="card-description">Region:</span>
            {region}
          </p>
          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button className="country-info">
              Read More <FaArrowRight />
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ContryCard;
