import React from "react";

export const Species = ({ setSpecies, setPageNumber }) => {
  let species = ["Human", "Alien"];

  const handleClick = (s) => {
    setSpecies(s);
    setPageNumber(1);
  };

  return (
    <li className="dropdown-item">
      {species.map((s) => (
        <button
          type="button"
          className="btn btn-outline-primary"
          key={s}
          onClick={() => handleClick(s)}
        >
          {s}
        </button>
      ))}
    </li>
  );
};
