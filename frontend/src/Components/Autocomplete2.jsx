import React, { useState } from "react";
import { words } from "./words";

const Autocomplete2 = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

    for(let x of words){
        searchHistory.push(x)
    }

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter suggestions based on input value
    const filteredSuggestions = searchHistory
      .filter((query) => query.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);

    setSuggestions(filteredSuggestions);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Add the current input value to the search history
    setSearchHistory((prevHistory) => [inputValue, ...prevHistory]);

    // Clear the input and suggestions
    setInputValue("");
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const handleClearInput = () => {
    setInputValue("");
    setSuggestions([]);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search..."
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "100%",
            }}
          />
          {suggestions.length > 0 && (
            <ul
              style={{
                position: "absolute",
                top: "calc(100% + 4px)",
                left: 0,
                width: "100%",
                background: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "0",
                margin: "0",
                listStyle: "none",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    borderBottom:
                      index === suggestions.length - 1
                        ? "none"
                        : "1px solid #ccc",
                  }}
                  onClick={() => handleSuggestionClick(suggestion)}
                  dangerouslySetInnerHTML={{
                    __html: suggestion.replace(
                      new RegExp(`(${inputValue})`, "gi"),
                      "<mark>$1</mark>"
                    ),
                  }}
                />
              ))}
            </ul>
          )}
        </div>
        <button type="submit">Search</button>
        <button type="button" onClick={handleClearInput}>
          Clear
        </button>
      </form>

      <h3>Search History:</h3>
      <ul>
        {searchHistory.slice(0,5).map((query, index) => (
          <li key={index}>{query}</li>
        ))}
      </ul>
    </div>
  );
};

export { Autocomplete2 };
