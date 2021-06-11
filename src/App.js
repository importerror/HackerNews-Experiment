import React, { useState, useCallback, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import ResultCard from "./components/ResultCard";
import { formatJsonData } from "./utils/helper";
// import debounce from "lodash.debounce";
import useDebounce from "./utils/debounce";
import { searchQuery } from "./utils/api";

export default function App() {
  // State and setter for search term
  const [searchTerm, setSearchTerm] = useState("");

  // State and setter for search results
  const [results, setResults] = useState(null);

  // State for search status (whether there is a pending API request)
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      searchQuery(debouncedSearchTerm).then((results) => {
        setIsSearching(false);
        setResults(results);
      });
    } else {
      setResults(null);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="container">
      <Searchbar onChange={setSearchTerm} value={searchTerm} />

      {isSearching ? (
        <div>Searching ...</div>
      ) : (
        <ResultCard results={results} query={searchTerm} />
      )}
    </div>
  );
}
