import React from "react";
import CountryFacts from "../Api/Countrydata.json";

const About = () => {
  console.log(CountryFacts);
  return (
    <>
      <section className="section-about container">
        <h2 className="container-title">
          Here are the Interesting Facts
          <br />
          we're proud of
        </h2>
        <div className="gradiant-cards">
          {CountryFacts.map((country) => {
            const{id,countryName,capital,population,interestingFactt} = country;
            return (
              <>
                <div className="card" key={id}>
                  <div className="container-card bg-blue-box">
                    <p className="card-title">{countryName}</p>
                    <p>
                      <span className="card-discription">Capital:</span>
                      {capital}
                    </p>
                    <p>
                      <span className="card-discription">Population:</span>
                      {population}
                    </p>
                    <p>
                      <span className="card-discription">
                        Interesting Fact:
                      </span>
                      {interestingFactt}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
