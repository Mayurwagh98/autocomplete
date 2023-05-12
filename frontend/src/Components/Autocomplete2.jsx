// import React, { useState } from 'react';

// const Autocomplete = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [searchHistory, setSearchHistory] = useState([]);

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);

//     // Filter suggestions based on input value
//     const filteredSuggestions = searchHistory.filter(query =>
//       query.toLowerCase().includes(value.toLowerCase())
//     ).slice(0, 5);

//     setSuggestions(filteredSuggestions);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // Add the current input value to the search history
//     setSearchHistory(prevHistory => [inputValue, ...prevHistory]);

//     // Clear the input and suggestions
//     setInputValue('');
//     setSuggestions([]);
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setInputValue(suggestion);
//     setSuggestions([]);
//   };

//   const handleClearInput = () => {
//     setInputValue('');
//     setSuggestions([]);
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Search..."
//           list="suggestions-list"
//         />
//         <datalist id="suggestions-list">
//           {suggestions.map((suggestion, index) => (
//             <option key={index} value={suggestion} />
//           ))}
//         </datalist>
//         <button type="submit">Search</button>
//         <button type="button" onClick={handleClearInput}>Clear</button>
//       </form>

//       <h3>Search History:</h3>
//       <ul>
//         {searchHistory.map((query, index) => (
//           <li key={index}>{query}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export {Autocomplete}