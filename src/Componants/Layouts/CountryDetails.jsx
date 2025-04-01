import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../Api/ApiData";
import Loader from "../UI/Loader";
import { object } from "yup";


const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      console.log(res.data[0]);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, []);
  if (isPending) return <Loader />;
  return (
    <>
      <section className="card country-deatils-card container">
        <div className="container-card bg-white-box">
        { country && (
            <div className="grid country-image grid-two-cols">
                <img className ="flag"src={country.flags.svg} alt={country.flags.svg} />
                <div className="country-content">
                    <p className="card-title">{country.name.official}</p>
                    <div className="info-container">
                        <p>
                            <span className="card-description">Native Name:</span>
                            {Object.keys(country.name.nativeName)
                                .map((key)=>
                                    country.name.nativeName[key].common
                                ).join(", ")}
                        </p>
                        <p>
                            <span className="card-description">Population:</span>
                            {country.population.toLocaleString()}
                        </p>
                        <p>
                            <span className="card-description">Region:</span>
                            {country.region}
                        </p>
                        <p>
                            <span className="card-description">Sub Region:</span>
                            {country.subregion}
                        </p>
                        <p>
                            <span className="card-description">Capital:</span>
                            {country.capital}
                        </p>
                        <p>
                            <span className="card-description">Top Level Domain:</span>
                            {country.tld[0]}
                        </p>
                        <p>
                            <span className="card-description">Currencies:</span>
                            {Object.keys(country.currencies)
                                .map((currElem)=>country.currencies[currElem].name)
                                .join(", ")
                            }
                        </p>

                    </div>
                </div>
            </div>

        )}
            <div className="country-card-backBtn">
                <NavLink to="/country" className="backBtn">
                <button>Go Back</button>

                </NavLink>
            </div>
        </div>
      </section>
    </>
  );
};

export default CountryDetails;
