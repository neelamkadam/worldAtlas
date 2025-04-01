import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../Api/ApiData";
import Loader from "../Componants/UI/Loader";
import CountryCard from "../Componants/Layouts/CountryCard";
import SearchFilter from "../Componants/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [contryData, setCountryData] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountryData(res.data);
    });
  }, []);
  ///filter logic
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };
  const filterCountry = contryData.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  if (isPending) return <Loader />;
  return (
    <>
      <section className="country-section container">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          contryData={contryData}
          setCountryData={setCountryData}
        />
        <div className="gradiant-Countrycards">
          {filterCountry.map((currElem, index) => {
            return <CountryCard country={currElem} key={index} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Country;
