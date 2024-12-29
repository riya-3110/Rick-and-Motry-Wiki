import React from "react";

export const Gender = ({ setGender, setPageNumber }) => {
  let gender = ["Male", "Female", "Unknown"];

  const handleClick = (g) => {
    setGender(g);
    setPageNumber(1);
  };

  return (
    <li className="dropdown-item">
      {gender.map((g) => (
        <button
          type="button"
          className="btn btn-outline-primary"
          key={g}
          onClick={() => handleClick(g)}
        >
          {g}
        </button>
      ))}
    </li>
  );
};
