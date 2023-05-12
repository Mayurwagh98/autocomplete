import React, { useState } from "react";
import "./Autocomplete.css";

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [history, sethistory] = useState(["dog", "did", "cat", "car", "doing"]);

  const handleInputChange = (event) => {
    const value = event.target.value;

    setInputValue(value);

    // Filter suggestions based on input value
    const filterSuggestions = history
      .filter((query) => query.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);

    setSuggestions(filterSuggestions);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Add the current input value to the search history
    sethistory((prev) => [inputValue, ...prev]);

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
    <div className="main_div">
      <form onSubmit={handleFormSubmit}>
        <div style={{ position: "relative" }}>
          <h2 className="search_heading">Search Here.....</h2>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search..."
            className="input_search"
          />
          {suggestions.length > 0 && inputValue !== "" && (
            <ul className="suggestions_ul">
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
                    // to replace the input word with suggested word
                    __html: suggestion.replace(
                      new RegExp(`(${inputValue})`, "gi"),
                      "<mark>$1</mark>" // to mark the suggested matched word
                    ),
                  }}
                />
              ))}
            </ul>
          )}
        </div>
        <button type="submit" className="search_button">
          Search
        </button>
        <button
          type="button"
          className="clear_button"
          onClick={handleClearInput}
        >
          Clear
        </button>
      </form>

      <h3 className="search_history_heading">Search History:</h3>
      <ul>
        {history.map((query, index) => (
          <li key={index} className="history_li">
            {query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Autocomplete };
