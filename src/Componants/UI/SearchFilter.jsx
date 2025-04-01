import React from 'react'
import "../../App.css"

const SearchFilter = ({search,setSearch,filter,setFilter,contryData,setCountryData}) => {
    const handleInputChange =(e) =>{
        e.preventDefault();
        setSearch(e.target.value);
    }
    const handleSelectChange =(e) =>{
        e.preventDefault();
        setFilter(e.target.value);
    }
    console.log(search,filter);

    const sortCountries =(value) =>{
        const countrySort = [...contryData].sort((a,b)=>{
           return (value === "asc"
           ? a.name.common.localeCompare(b.name.common)
           : b.name.common.localeCompare(a.name.common));
        });
        setCountryData(countrySort);
    };
  return (
    <>
      <section className='section-searchFilter container'>
      <div>
      <input type="text" placeholder='Search' value={search} onChange={handleInputChange} />
      </div>
      <div>
        <button className="sortingData"onClick={()=>{sortCountries("asc")}}>Asc</button>
      </div>
      <div>
        <button onClick={()=>{sortCountries("dec")}}>Desc</button>
      </div>
        <div>
            <select className='select-section' value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
            </select>
        </div>
      </section>
    </>
  )
}

export default SearchFilter
