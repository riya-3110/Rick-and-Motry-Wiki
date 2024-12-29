import React from "react";

export const InputGroup = ({ results }) => {
  if (!results || results.length === 0) {
    return <h1>No episode Found</h1>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <h4>Pick Episode</h4>
      <div className="input-group">
        <select
          className="form-select"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
        >
          {results.map((e, index) => (
            <option key={index} value={index}>
              Episode {index + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
