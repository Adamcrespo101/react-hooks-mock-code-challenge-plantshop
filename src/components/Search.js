import React from "react";

function Search({search, setSearch, plants}) {
  function handleSearch(e){
    setSearch(e.target.value)
  }

  

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        onChange={handleSearch}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        
      />
    </div>
  );
}

export default Search;
