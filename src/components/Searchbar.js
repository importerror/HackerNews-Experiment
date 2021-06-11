import React from "react";

const Searchbar = (props) => {
  return (
    <div>
      <h1>Search HackerNews</h1>
      <input onChange={(e) => props.onChange(e.target.value)} />
    </div>
  );
};

export default Searchbar;
