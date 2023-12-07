import { useState } from "react";

const AutoComplete = () => {
  const options = [
    "Apple is good",
    "Banana",
    "Cherry",
    "Date is good",
    "Grape",
    "Lemon",
    "Orange is good",
    "Peach is good Af",
    "Pear is af",
    "Strawberry",
  ];
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);

    const filter = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase()),
    );
    setSuggestions(filter);
  };
  const handleClick = (option) => {
    setInput(option);
    setSuggestions([]);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search here..... "
          value={input}
          onChange={handleInput}
          className="autocomplete-search"
        />
        {suggestions.length > 0 && (
          <ul className="suggestions li-options">
            {" "}
            {suggestions.map((option, index) => (
              <li key={index} onClick={() => handleClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default AutoComplete;
