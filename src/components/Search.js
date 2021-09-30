import React from "react";

function Search({setSearchValue}) {
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => setSearchValue(searchValue => e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
