import React from "react";
import { Status } from "./Categories/Status";
import { Species } from "./Categories/Species";
import { Gender } from "./Categories/Gender";

export const Filter = ({
  pageNumber,
  status,
  setStatus,
  setGender,
  setSpecies,
  setPageNumber,
}) => {
  const handleClear = (e) => {
    e.preventDefault();
    setStatus("");
    setGender("");
    setSpecies("");
    setPageNumber(1);
  };

  return (
    <div className="container">
      <h1>Filters</h1>
      <a href="#" className="fs-4" onClick={handleClear}>
        Clear Filters
      </a>
      <div className="container-sm">
        <div className="dropdown my-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Status
          </button>
          <ul className="dropdown-menu">
            <Status setStatus={setStatus} setPageNumber={setPageNumber} />
          </ul>
        </div>
        <div className="dropdown my-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Species
          </button>
          <ul className="dropdown-menu">
            <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Gender
          </button>
          <ul className="dropdown-menu">
            <Gender setGender={setGender} setPageNumber={setPageNumber} />
          </ul>
        </div>
      </div>
    </div>
  );
};
